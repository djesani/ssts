import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DtwService } from '../dtw.service';
import { environment } from '../../../../../environments/environment';
import { conditionalValidator } from '../../../../shared/conditionalValidator/conditionalValidator';

type WastesafeTransporter = { label: string, active: boolean };
type MinimumRequirements = {
	laboratoryPathologyRequirements: boolean;
	portableToiletsDepotRequirements: boolean;
	publicPoolsRequirements: boolean;
	equipmentWashingRequirements: boolean; hydraulicConsultantRequired: boolean, greaseRemovalDeviceRequired: boolean, roofAndBundRequired: boolean,
	panelBeaterSprayPainterRequirements: boolean, petrolStationForecourtRequirements: boolean,
	microCraftBrewingRequirements: boolean, commercialLaundryRequirements: boolean
}
const now = new Date();

@Component({
	selector: 'dtw-application',
	templateUrl: './dtw-application.component.html'
})
export class DtwApplicationComponent implements OnInit {

	CONTEXT_PATH: string = environment.CONTEXT_PATH;

	industrialBusinessActivityNames = [
		{ label: "Manufacturing" },
		{ label: "Wash bays/cleaning" },
		{ label: "Laboratories" },
		{ label: 'Food processing' },
		{ label: 'Waste processing & disposal' },
		{ label: 'Contaminated ground water/surface water' }
	]

	dtwForm: FormGroup;
	dtwPostForm: FormGroup;

	dtwFormSubmitted = false;
	textFieldRegex = "[0-9a-zA-Z,'. &-]*";
	personNameRegex = "[0-9a-zA-Z,'. &-]*";
	nationalNumberRegex = "[0-9]*";
	textAreaRegex = "^[0-9a-zA-Z!@#$%&*()_\\-+'\",./?\n\r ]+$";

	isCollapsedHelpIndustrialBusiness = true;
	isCollapsedHelpWholesaleBusiness = true;

	referenceData: any;
	cart: any;
	formData = {};
	pretreatmentEquipmentList = [];
	commercialPretreatmentEquipmentList = [];
	commercialBusinessActivitiesList = [];
	minRequirements: MinimumRequirements = {
		hydraulicConsultantRequired: false,
		greaseRemovalDeviceRequired: false,
		roofAndBundRequired: false,
		panelBeaterSprayPainterRequirements: false,
		petrolStationForecourtRequirements: false,
		microCraftBrewingRequirements: false,
		commercialLaundryRequirements: false,
		equipmentWashingRequirements: false,
		publicPoolsRequirements: false,
		portableToiletsDepotRequirements: false,
		laboratoryPathologyRequirements: false
	};
	minEquipment = [];
	minDischargeStartDate: NgbDateStruct;
	otherApprovedDevice = false;
	applicationId: any;
	checkedIndustrialActivities = [];

	applicationDocuments = [];
	hydraulicLetterAttachmentsRequiredShow = false;
	hydraulicDrawingsAttachmentsRequiredShow = false;
	documentAttachments = {
		hydraulicLetter: [],
		hydraulicDrawings: []
	};
	documentAttachmentsExisting = {
		hydraulicLetter: [],
		hydraulicDrawings: []
	};
	attachmentConfigHydraulicLetter: any;
	attachmentConfigHydraulicDrawings: any;
	attachmentsHydraulicLetterChanged = [];
	attachmentsHydraulicDrawingsChanged = [];


	@ViewChild('continueBtn') continueBtn: any;

	constructor(
		private formBuilder: FormBuilder,
		private dtwService: DtwService,
	) { }

	ngOnInit() {
		// NOTE: The following nexted async calls are due to a sync dependancy needs
		// DEPENDANCY ORDER
		// calculateRequirements() =>  getCommercialBusinessActivities() => dtwService.fetchCart() => dtwService.getReferenceData()
		this.dtwService.getReferenceData().subscribe((data: any[]) => {
			this.referenceData = data;
			this.dtwService.fetchCart().subscribe((data: any[]) => {
				this.cart = data;
				this.attachmentConfigHydraulicLetter.applicationId = this.cart.application.id;
				this.attachmentConfigHydraulicDrawings.applicationId = this.cart.application.id;
				this.dtwService.setCart(data);
				this.formPreFill();
			});
		});

		this.dtwService.getOtherApprovedDevice().subscribe((data: any) => {
			if (this.otherApprovedDevice == false) {
				this.otherApprovedDevice = data;
			}
		});

		let commercialWholesaleValidator = conditionalValidator(() =>
			this.isWholesale() || this.isCommercial(),
			Validators.required);
		let commercialValidator = conditionalValidator(() =>
			this.isCommercial(),
			Validators.required);
		let wholesaleValidator = conditionalValidator(() =>
			this.isWholesale(),
			Validators.required);
		let industrialValidator = conditionalValidator(() =>
			this.isIndustrial(),
			Validators.required);
		let wastesafeValidator = conditionalValidator(() =>
			this.isWastesafeTransporterRequired(),
			Validators.required);

		this.dtwForm = this.formBuilder.group({
			businessName: ["", [Validators.required]],
			businessEmail: ["", [Validators.required, Validators.email]],
			businessPhoneNumber: ["", Validators.required],

			contactPersonsName: ["", Validators.required],
			contactPersonsEmail: ["", [Validators.required, Validators.email]],
			contactPersonsPhoneNumber: ["", Validators.required],

			industrialBusiness: ["", Validators.required],

			wholesaleBusiness: ['',
				conditionalValidator(() =>
					this.dtwForm.get('industrialBusiness').value == 'no',
					Validators.required)],
			pretreatmentEquipment: ['',
				conditionalValidator(() => this.isWholesale(), this.pretreatmentEquipmentValidator)],
			isWastesafeTransporterArranged: ['', wastesafeValidator],
			wastesafeTransporter: ['', wastesafeValidator],
			attachmentsHydraulicLetters: ['', conditionalValidator(() =>
				this.minRequirements.hydraulicConsultantRequired == true || this.isWholesale(),
				Validators.required)],
			attachmentsHydraulicDrawings: ['', wholesaleValidator],
			otherIndustrialBusinessActivity: ['',
				conditionalValidator(() =>
					this.otherIndustrialBusinessActivityChecked == true,
					Validators.required)],
			industrialBusinessActivities: this.formBuilder.array([], [industrialValidator]),
			commercialBusinessActivities: ['', commercialValidator],
			commercialPretreatmentEquipment: ['', conditionalValidator(() => this.isCommercial(), this.commercialPretreatmentEquipmentValidator.bind(this))],
			wasterwaterDischargePerDay: ['', industrialValidator],
			howWastewaterGenerated: ['', industrialValidator],

			dischargeStartDate: ['',
				conditionalValidator(() =>
					this.isIndustrial() || this.isWholesale(),
					Validators.required)],

			shopNumber: [""],
			lotNumber: [""],

			sydneyWaterContact: [""],

			dtwAdditionalInformation: [""]

		});

		this.minDischargeStartDate = { year: now.getFullYear() - 1, month: now.getMonth() + 1, day: now.getDate() };
		this.getPretreatmentEquipmentList();
		this.getCommercialBusinessActivities();
		this.getCommercialPretreatmentEquipmentList();

		this.attachmentConfigHydraulicLetter = {
			attachmentType: "Hydraulic letter",
			labelPrimaryCounter: "1.",
			labelPrimary: "Letter from hydraulic consultant",
			labelSecondary: "Specify the requirements for the pre-treatment for your site.",
			fileTypeAccept: ".doc, .docx, .pdf, .jpg, .jpeg, .png, .dwg, .zip, .xls, .xlsx",
			fileTypeAcceptError: "File format not accepted",
			attachmentsRequiredError: "At least one letter required",
			filesMaxUploadAllowedError: "5 files only",
			labelFileUpload: "Attach file/s",
			labelRemoveIconClass: "fa-trash",
			// fileMaxSizeError: "We couldn't upload this file as it's more than 10MB",
			// fileMinSizeError: "We couldn't upload this file as it's less than 1KB",
			// fileNoContentError: "We couldn't upload this file as it's 0 bytes",
			// fileUploadMultiple: true,
			// filesMaxUploadAllowed: 5,
			// fileMaxSize: 10485760, // 10MB in bytes,
			// fileMinSize: 1024, // bytes
			// attachmentAddError: "Error in adding attachment",
			// attachmentRemoveError: "Error in removing attachment",
			// labelFileUploadIconClass: "fa-plus",
			// labelRemove: "Remove",
		}

		this.attachmentConfigHydraulicDrawings = {
			attachmentType: "Hydraulic drawings",
			labelPrimaryCounter: "2.",
			labelPrimary: "Hydraulic drawings",
			labelSecondary: "Specific to this site.",
			fileTypeAccept: ".doc, .docx, .pdf, .jpg, .jpeg, .png, .dwg, .zip, .xls, .xlsx",
			fileTypeAcceptError: "File format not accepted",
			attachmentsRequiredError: "At least one diagram required",
			filesMaxUploadAllowedError: "5 files only",
			labelFileUpload: "Attach file/s",
			labelRemoveIconClass: "fa-trash",
		}

		// Update formData as the value of a field changes.
		this.dtwForm.valueChanges.subscribe(val => {
			this.populateFormData();
		});
	}

	// convenience getter for easy access to form fields
	get dtwFormControls() {
		return this.dtwForm.controls;
	}

	pretreatmentEquipmentValidator(control: FormControl): { [s: string]: boolean } {
		var preTreatments = control.value;
		var isMinimumPretreatmentAdded = false;
		var isInFloorBucketTrapPresent = false;
		var inInSinkBucketTrapPresent = false;
		var isGreaseTrapPresent = false;
		var isCentralisedPreTreatmentPresent = false;
		if (preTreatments) {
			for (var preTreatment of preTreatments) {
				if (!isInFloorBucketTrapPresent && preTreatment.equipmentType == 'In-floor bucket trap') {
					isInFloorBucketTrapPresent = true;
				}
				else if (!inInSinkBucketTrapPresent && preTreatment.equipmentType == 'In-sink bucket trap') {
					inInSinkBucketTrapPresent = true;
				}
				else if (!isGreaseTrapPresent && preTreatment.equipmentType == 'Grease trap') {
					isGreaseTrapPresent = true;
				}
				else if (!isCentralisedPreTreatmentPresent && preTreatment.equipmentType == 'Centralised pre-treatment') {
					isCentralisedPreTreatmentPresent = true;
				}
			}
		}
		if (isInFloorBucketTrapPresent && inInSinkBucketTrapPresent && (isGreaseTrapPresent || isCentralisedPreTreatmentPresent)) {
			isMinimumPretreatmentAdded = true;
		}
		else {
			var customErrorJson = {};
			if (!isInFloorBucketTrapPresent) {
				customErrorJson['inFloorBucketTrap'] = true;
			}
			if (!inInSinkBucketTrapPresent) {
				customErrorJson['inSinkBucketTrap'] = true;
			}
			if (!isGreaseTrapPresent && !isCentralisedPreTreatmentPresent) {
				customErrorJson['greaseTrapOrCentralisedPreTreatment'] = true;
			}
		}
		return customErrorJson;
	}

	commercialPretreatmentEquipmentValidator() {
		var customErrorJson = {};
		this.checkMinEquipmentSatisfied();
		if (this.minEquipment && this.minEquipment.length > 0) {
			this.minEquipment.forEach(minEquipment => {
				if (minEquipment.name == 'Grease trap' || minEquipment.name == 'Centralised pre-treatment') {
					if (this.commercialPretreatmentEquipmentList.filter(equipment => equipment.equipmentType == 'Grease trap').length == 0
						&& this.commercialPretreatmentEquipmentList.filter(equipment => equipment.equipmentType == 'Centralised pre-treatment').length == 0
						&& !customErrorJson['Grease trap or Centralised pre-treatment']) {
						customErrorJson['Grease trap or Centralised pre-treatment'] = 'Missing';
						return;
					}
				}
				else if (this.commercialPretreatmentEquipmentList.filter(equipment => equipment.equipmentType == minEquipment.name).length == 0) {
					customErrorJson[minEquipment.name] = 'Missing';
				}
				if (minEquipment.satisfied != null && minEquipment.satisfied == false) {
					customErrorJson[minEquipment.name] = 'NotSatisfied';
				}
			});
			if (Object.keys(customErrorJson).length > 0) {
				this.dtwFormControls.commercialPretreatmentEquipment.setErrors(customErrorJson);
			}
		}
		return customErrorJson;
	}


	populateFormData() {
		if (this.cart && this.cart.application && this.cart.application.id) {
			this.applicationId = this.cart.application.id
		} else {
			this.applicationId = 1;
		}
		this.formData = {
			"applicationId": this.applicationId,

			"businessName": this.dtwForm.value.businessName,
			"businessEmail": this.dtwForm.value.businessEmail,
			"businessPhoneNumber": this.dtwForm.value.businessPhoneNumber,

			"contactPersonsName": this.dtwForm.value.contactPersonsName,
			"contactPersonsEmail": this.dtwForm.value.contactPersonsEmail,
			"contactPersonsPhoneNumber": this.dtwForm.value.contactPersonsPhoneNumber,

			"industrialBusiness": this.dtwForm.value.industrialBusiness,
			"wholesaleBusiness": this.dtwForm.value.wholesaleBusiness,
			"pretreatmentEquipment": JSON.stringify(this.dtwForm.value.pretreatmentEquipment),
			"commercialPretreatmentEquipment": JSON.stringify(this.dtwForm.value.commercialPretreatmentEquipment),
			"isWastesafeTransporterArranged": this.dtwForm.value.isWastesafeTransporterArranged,
			"wastesafeTransporter": JSON.stringify(this.dtwForm.value.wastesafeTransporter),

			"industrialBusinessActivities": this.dtwForm.value.industrialBusinessActivities.toString(),
			"commercialBusinessActivities": JSON.stringify(this.dtwForm.value.commercialBusinessActivities),
			"otherIndustrialBusinessActivity": this.dtwForm.value.otherIndustrialBusinessActivity,
			"wasterwaterDischargePerDay": this.dtwForm.value.wasterwaterDischargePerDay,
			"howWastewaterGenerated": this.dtwForm.value.howWastewaterGenerated,

			"shopNumber": this.dtwForm.value.shopNumber,
			"lotNumber": this.dtwForm.value.lotNumber,

			"dischargeStartDate": this.dtwForm.value.dischargeStartDate,

			"documentAttachments": JSON.stringify(this.dtwForm.value.documentAttachments),
			"dtwAdditionalInformation": this.dtwForm.value.dtwAdditionalInformation,
			"sydneyWaterContact": this.dtwForm.value.sydneyWaterContact
		}
	}

	formPreFill() {
		if (this.cart && this.cart.application && this.cart.application.applicationData) {
			const applicationData = this.cart.application.applicationData;
			this.dtwForm.get("businessName").setValue(applicationData.businessName);
			this.dtwForm.get("businessEmail").setValue(applicationData.businessEmail);
			this.dtwForm.get("businessPhoneNumber").setValue(applicationData.businessPhoneNumber);

			this.dtwForm.get("contactPersonsName").setValue(applicationData.contactPersonsName);
			this.dtwForm.get("contactPersonsEmail").setValue(applicationData.contactPersonsEmail);
			this.dtwForm.get("contactPersonsPhoneNumber").setValue(applicationData.contactPersonsPhoneNumber);

			this.dtwForm.get("industrialBusiness").setValue(applicationData.industrialBusiness);
			this.dtwForm.get("wholesaleBusiness").setValue(applicationData.wholesaleBusiness);

			if (applicationData.pretreatmentEquipment) {
				this.dtwService.setPretreatmentEquipmentList(JSON.parse(applicationData.pretreatmentEquipment));
			}
			if (applicationData.commercialBusinessActivities) {
				let businessActivities = JSON.parse(applicationData.commercialBusinessActivities)
				this.handleCommercialBusinessActivities(businessActivities);
				this.dtwService.setBusinessActivitiesList(businessActivities);
			}

			if (applicationData.commercialPretreatmentEquipment) {
				let commercialEquipment = JSON.parse(applicationData.commercialPretreatmentEquipment);
				if (commercialEquipment.length + this.commercialPretreatmentEquipmentList.length > 0) {
					this.handleCommercialPretreatmentEquipmentList(commercialEquipment);
					this.dtwService.setCommercialPretreatmentEquipmentList(commercialEquipment);
				}
			}

			this.dtwForm.get("isWastesafeTransporterArranged").setValue(applicationData.isWastesafeTransporterArranged);
			if (applicationData.wastesafeTransporter) {
				this.dtwForm.get("wastesafeTransporter").setValue(JSON.parse(applicationData.wastesafeTransporter));
			}

			this.dtwForm.get("shopNumber").setValue(applicationData.shopNumber);
			this.dtwForm.get("lotNumber").setValue(applicationData.lotNumber);

			this.dtwForm.get("dischargeStartDate").setValue(applicationData.dischargeStartDate);

			if (this.cart.application.document) {
				this.applicationDocuments = this.cart.application.document;
				this.applicationDocuments.forEach(doc => {
					doc.metadata = JSON.parse(doc.metadata);
					doc.fileName = doc.metadata.documentName;
					doc.uploadStatus = 'success';
					doc.inProgress = false;
				});
				this.documentAttachmentsExisting.hydraulicLetter = this.applicationDocuments.filter(function (element) {
					return element.metadata.documentType == 'Hydraulic letter';
				});
				this.documentAttachmentsExisting.hydraulicDrawings = this.applicationDocuments.filter(function (element) {
					return element.metadata.documentType == 'Hydraulic drawings';
				});
			}

			this.dtwForm.get("dtwAdditionalInformation").setValue(applicationData.dtwAdditionalInformation);
			if (applicationData.industrialBusinessActivities) {
				const activityArray = applicationData.industrialBusinessActivities.split(",");
				const industrialBusinessActivityArray = <FormArray>this.dtwForm.controls.industrialBusinessActivities;
				for (var i = 0; i < activityArray.length; i++) {
					this.checkedIndustrialActivities[i] = activityArray[i];
					industrialBusinessActivityArray.push(new FormControl(activityArray[i]));
					if (activityArray[i] == 'Other') {
						this.otherIndustrialBusinessActivityChecked = true;
					}
				}
			}
			this.dtwForm.get("otherIndustrialBusinessActivity").setValue(applicationData.otherIndustrialBusinessActivity);
			this.dtwForm.get("wasterwaterDischargePerDay").setValue(applicationData.wasterwaterDischargePerDay);
			this.dtwForm.get("howWastewaterGenerated").setValue(applicationData.howWastewaterGenerated);
			this.dtwForm.get("sydneyWaterContact").setValue(applicationData.sydneyWaterContact);
		}
	}

	// local handling of subscribe call back methods and also used for prefill of existing orders
	handlePretreatmentEquipmentList(value: any): void {
		this.pretreatmentEquipmentList = value;
		this.dtwForm.get("pretreatmentEquipment").setValue(this.pretreatmentEquipmentList);
	}
	handleCommercialPretreatmentEquipmentList(value: any): void {
		this.commercialPretreatmentEquipmentList = value;
		this.dtwForm.get("commercialPretreatmentEquipment").setValue(this.commercialPretreatmentEquipmentList);
		this.checkMinEquipmentSatisfied();
	}
	handleCommercialBusinessActivities(value: any): void {
		this.commercialBusinessActivitiesList = value;
		this.dtwForm.get("commercialBusinessActivities").setValue(this.commercialBusinessActivitiesList);
		this.calculateRequirements();
		this.dtwService.setMinEquipment(this.minEquipment);
		this.commercialPretreatmentEquipmentValidator();
	}
	getPretreatmentEquipmentList(): void {
		this.dtwService.getPretreatmentEquipmentList().subscribe(
			value => {
				this.handlePretreatmentEquipmentList(value);
			}
		);
	}

	getCommercialPretreatmentEquipmentList(): void {
		this.dtwService.getCommercialPretreatmentEquipmentList().subscribe(
			value => {
				this.handleCommercialPretreatmentEquipmentList(value);
			}
		);
	}


	getCommercialBusinessActivities(): void {
		this.dtwService.getBusinessActivitiesList().subscribe(
			value => {
				this.handleCommercialBusinessActivities(value);
			}
		);
	}

	checkMinEquipmentSatisfied(): void {
		//if earlier validation has marked it as required  (ie true)
		//then no need evaulate equipment (ie skip this calculation)
		this.minEquipment.forEach(minEquipment => {
			let minimumEquipmentRequired = false;
			if (minEquipment.volume > 0 && minEquipment.name != 'Centralised pre-treatment') {
				let equipmentTotal = 0;
				this.commercialPretreatmentEquipmentList.filter(equipment => equipment.equipmentType == minEquipment.name)
					.forEach(equipment => {
						if (!isNaN(Number(equipment.volume))) {
							let volume = Number(equipment.volume);
							equipmentTotal = equipmentTotal + volume;
						}
						if (equipment.commercialPretreatmentEquipmentInstalled == 'notyet') {
							minimumEquipmentRequired = true;
						}
					});
				let isUndersized = equipmentTotal < minEquipment.volume;
				if (isUndersized && minimumEquipmentRequired) {
					minEquipment.satisfied = false;
				} else {
					minEquipment.satisfied = true;
				}
				this.commercialPretreatmentEquipmentList.filter(equipment => equipment.equipmentType == minEquipment.name)
					.forEach(equipment => { equipment.undersized = isUndersized;});
			}
		});
		this.dtwFormControls.attachmentsHydraulicLetters.updateValueAndValidity();
	}

	calculateRequirements(): void {
		//initialise equipment and requirements
		this.minRequirements.hydraulicConsultantRequired = false;
		this.minRequirements.greaseRemovalDeviceRequired = false;
		this.minRequirements.roofAndBundRequired = false;
		this.minRequirements.panelBeaterSprayPainterRequirements = false;
		this.minRequirements.petrolStationForecourtRequirements = false;
		this.minRequirements.microCraftBrewingRequirements = false;
		this.minRequirements.commercialLaundryRequirements = false;
		this.minRequirements.equipmentWashingRequirements = false;
		this.minRequirements.publicPoolsRequirements = false;
		this.minRequirements.portableToiletsDepotRequirements = false;
		this.minRequirements.laboratoryPathologyRequirements = false;
		this.minEquipment = [];

		this.commercialBusinessActivitiesList.forEach(activity => {
			let config = null;
			let supermarketDepts = JSON.parse(activity.supermarketDepartments).filter(dept => dept.value == true);
			let bakeryProduce = JSON.parse(activity.bakeryProduce).filter(produce => produce.value == true);
			// config based on capacity
			if (activity.capacity != null && activity.capacity.length > 0 && (activity.partOfFoodcourt == null || activity.partOfFoodcourt != 'yes')) {
				config = this.referenceData[activity.businessCategory][activity.businessActivity];
				if (config.capacity == true) {
					config = this.referenceData['capacity'][activity.capacity];
				}
			} //config based on franchise  
			else if (activity.franchiseName != null && activity.franchiseName.length > 0) {
				config = this.referenceData[activity.businessCategory][activity.businessActivity][activity.franchiseName];
				if (config == null) {
					config = this.referenceData[activity.businessCategory][activity.businessActivity]['Other Franchise'];
				}
			} //config to determine if no grease trap required
			else if ((activity.hotFoodCookedOnsite != null && activity.hotFoodCookedOnsite == 'no') ||
				(bakeryProduce.length == 1 && bakeryProduce[0].name == 'Bread')) {
				// no grease trap equipment if hotfood cooked on site is no or if bakery only sell hot bread
				config = {};
			} //config for child supermarket section/dept 
			else if (supermarketDepts != null && supermarketDepts.length > 0) {
				supermarketDepts.forEach(dept => {
					let deptConfig = this.referenceData[activity.businessCategory][activity.businessActivity][dept.name];
					if (config == null) {
						config = JSON.parse(JSON.stringify(deptConfig));
					} else {
						if (deptConfig.greaseRemovalDeviceRequired) {
							config.greaseRemovalDeviceRequired = deptConfig.greaseRemovalDeviceRequired;
						}
						config.equipment.volume = config.equipment.volume + deptConfig.equipment.volume;
					}
				});
			}//otherise use default config for business activity
			else {
				config = this.referenceData[activity.businessCategory][activity.businessActivity];
			}
			// when bbq overide if existing config has lower volume
			if (activity.isBbqRestaurant != null && activity.isBbqRestaurant == 'yes') {
				let configBbq = this.referenceData[activity.businessCategory][activity.businessActivity]['BBQ']
				if (config != null && config.equipment != null && configBbq.equipment.volume > config.equipment.volume) {
					config = configBbq;
				} else {
					configBbq = JSON.parse(JSON.stringify(configBbq));
					configBbq.equipment.volume = config.equipment.volume;
					config = configBbq;
				}
			}
			// set additional requirements based on config
			if (config.hydraulicConsultantRequired != null && config.hydraulicConsultantRequired == true) {
				this.minRequirements.hydraulicConsultantRequired = true;
			}
			if (config.greaseRemovalDeviceRequired != null && config.greaseRemovalDeviceRequired == true) {
				this.minRequirements.greaseRemovalDeviceRequired = true;
			}
			if (activity.businessActivity == 'Vehicle wash/detailing') {
				this.minRequirements.roofAndBundRequired = true;
			}
			if (activity.businessActivity == 'Panel beater/spray painter') {
				this.minRequirements.panelBeaterSprayPainterRequirements = true;
			}
			if (activity.businessActivity == 'Petrol station forecourt') {
				this.minRequirements.petrolStationForecourtRequirements = true;
			}
			if (activity.businessActivity == 'Micro/craft brewing') {
				this.minRequirements.microCraftBrewingRequirements = true;
			}
			if (activity.businessActivity == 'Commercial laundry') {
				this.minRequirements.commercialLaundryRequirements = true;
			}
			if (activity.businessActivity == 'Equipment washing') {
				this.minRequirements.equipmentWashingRequirements = true;
			}
			if (activity.businessActivity == 'Public swimming pool') {
				this.minRequirements.publicPoolsRequirements = true;
				this.minRequirements.hydraulicConsultantRequired = true;
			}
			if (activity.businessActivity == 'Portable toilets depot') {
				this.minRequirements.portableToiletsDepotRequirements = true;
			}
			if (activity.businessActivity == 'Laboratory/pathology') {
				this.minRequirements.laboratoryPathologyRequirements = true;
			}
			if (!!config && config?.equipment) {
				this.calculateMinEquipment(config.equipment);
			} else if (!!config && config?.equipmentList != null) {
				if (activity.inPetrolStation == 'yes') {
					config = config['inPetrolStation'];
				} else if (activity.isConnectedToSewer == 'yes') {
					config = config['isConnectedToSewer'];
				} else if (activity.temperatureOver38C == 'yes') {
					config = config['temperatureOver38C'];
					this.minRequirements.hydraulicConsultantRequired = true;
				}
				config?.equipmentList?.forEach(equipmentConfig => {
					this.calculateMinEquipment(equipmentConfig);
				});
				if (!config || !config?.equipmentList) {
					console.log("config - ", config);
					console.log("activity - ", activity);
				}
			}
		});
		//auto add cenralised pre-treatment when grease trap is added
		let greaseTrapIndex = this.minEquipment.findIndex(equipment => equipment.name == 'Grease trap');
		if (greaseTrapIndex > -1) {
			let greaseTrap = this.minEquipment[greaseTrapIndex];
			this.minEquipment.splice(greaseTrapIndex + 1, 0, { name: 'Centralised pre-treatment', volume: greaseTrap.volume });
		}
	}

	calculateMinEquipment(equipment): void {
		// determine the volume grouped by equipment type
		let foundEquipment = false;
		this.minEquipment.forEach(req => {
			if (!foundEquipment && equipment.name == req.name && req.volume != null && equipment.volume != null) {
				req.volume = req.volume + equipment.volume;
				foundEquipment = true;
			} else if (!foundEquipment && equipment.name == req.name && equipment.volume == null) {
				foundEquipment = true;
			}
		});
		if (!foundEquipment) {
			this.minEquipment.push({ name: equipment.name, volume: equipment.volume, measurementUnit: this.getMeasurementUnit(equipment.name) });
		}
	}

	getMeasurementUnit(equipmentName) {
		if (equipmentName == 'Oil water separator') {
			return 'L/h';
		} else {
			return 'L';
		}
	}

	onAttachmentsHydraulicLetterChanged(value) {
		this.attachmentsHydraulicLetterChanged = value;
		this.documentAttachments.hydraulicLetter = this.attachmentsHydraulicLetterChanged;
		this.dtwForm.get("attachmentsHydraulicLetters").setValue(this.documentAttachments.hydraulicLetter);
		this.isAttachmentsRequired();
	}

	onAttachmentsHydraulicDrawingsChanged(value) {
		this.attachmentsHydraulicDrawingsChanged = value;
		this.documentAttachments.hydraulicDrawings = this.attachmentsHydraulicDrawingsChanged;
		this.dtwForm.get("attachmentsHydraulicDrawings").setValue(this.documentAttachments.hydraulicDrawings);
		this.isAttachmentsRequired();
	}

	// Code for waste safe transport typeahead drop down field.
	@ViewChild('wastesafeTransporterInstance', { static: true }) wastesafeTransporterInstance: NgbTypeahead;
	wastesafeTransporterFocus$ = new Subject<string>();
	wastesafeTransporterClick$ = new Subject<string>();

	wastesafeTransporterFormatter = (wastesafeTransporter: WastesafeTransporter) => wastesafeTransporter.label;

	wastesafeTransporterSearch: OperatorFunction<string, readonly { label, active }[]> = (text$: Observable<string>) => {
		const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());

		return merge(debouncedText$, this.wastesafeTransporterFocus$, this.wastesafeTransporterClick$).pipe(
			map(term => (term === '' ? this.referenceData.wasteSafeTransporters
				.filter((m: WastesafeTransporter) =>
					m.active == true) :
				this.referenceData.wasteSafeTransporters
					.filter((m: WastesafeTransporter) =>
						m.active == true &&
						m.label.toLowerCase().indexOf(term.toLowerCase()) > -1)))
		);
	}

	formDataPostToServer() {
		this.continueBtn.nativeElement.click();
	}

	formPut(action: string) {
		if (action == 'back') {
			window.location.href = this.CONTEXT_PATH + '/secure/application/getProperty';
		}
		else if (action == 'save') {
			this.isAttachmentsRequired();
			this.dtwFormSubmitted = true;
			this.resetIrrelevantFields();
			if (this.dtwForm.valid) {
				this.populateFormData();
				this.dtwService.putCart(this.formData).subscribe((data: any[]) => {

				});
			}
		}
		else if (action == 'continue') {
			this.isAttachmentsRequired();
			this.dtwFormSubmitted = true;
			this.resetIrrelevantFields();
			if (this.dtwForm.valid) {
				this.populateFormData();
				this.formDataPostToServer();
			} else {
				return; // stop here if form is invalid
			}
		}
	}

	resetIrrelevantFields() {
		// Reset fields which are not relevant to current flow so their 
		// validation errors do not stop form submission.

		if (this.dtwFormControls.industrialBusiness.value == 'yes') {
			this.dtwForm.get("wholesaleBusiness").reset();
			this.dtwForm.get("pretreatmentEquipment").reset();
			this.dtwForm.get("commercialPretreatmentEquipment").reset();
			this.dtwForm.get("isWastesafeTransporterArranged").reset();
			this.dtwForm.get("wastesafeTransporter").reset();
			this.dtwForm.get("attachmentsHydraulicLetters").reset();
			this.dtwForm.get("attachmentsHydraulicDrawings").reset();
		}
		else if (this.dtwFormControls.wholesaleBusiness.value == 'yes') {
			this.dtwForm.get("industrialBusinessActivities").reset();
			this.otherIndustrialBusinessActivityChecked = false;
			this.dtwForm.get("otherIndustrialBusinessActivity").reset();
			this.dtwForm.get("wasterwaterDischargePerDay").reset();
			this.dtwForm.get("howWastewaterGenerated").reset();
			this.dtwForm.get("commercialPretreatmentEquipment").reset();
		} else if (this.isCommercial()) {
			this.dtwForm.get("otherIndustrialBusinessActivity").reset();
			this.dtwForm.get("wasterwaterDischargePerDay").reset();
			this.dtwForm.get("howWastewaterGenerated").reset();
			this.dtwForm.get("pretreatmentEquipment").reset();
		}
	}

	otherIndustrialBusinessActivityChecked = false;

	onIndustrialBusinessActivityChange(industrialBusinessActivity: string, isChecked: boolean) {
		const industrialBusinessActivityArray = <FormArray>this.dtwForm.controls.industrialBusinessActivities;
		if (isChecked) {
			industrialBusinessActivityArray.push(new FormControl(industrialBusinessActivity));
			this.checkedIndustrialActivities.push(industrialBusinessActivity);
			if (industrialBusinessActivity == 'Other') {
				this.otherIndustrialBusinessActivityChecked = true;
			}
		} else {
			let index = industrialBusinessActivityArray.controls.findIndex(x => x.value == industrialBusinessActivity)
			industrialBusinessActivityArray.removeAt(index);
			const checkedIndex = this.checkedIndustrialActivities.indexOf(industrialBusinessActivity);
			if (checkedIndex > -1) { // only splice array when item is found
				this.checkedIndustrialActivities.splice(checkedIndex, 1);
			}
			if (industrialBusinessActivity == 'Other') {
				this.otherIndustrialBusinessActivityChecked = false;
				this.dtwForm.controls.otherIndustrialBusinessActivity.reset();
			}
		}
	}

	isAttachmentsRequired() {
		if (this.dtwFormControls.industrialBusiness.value == 'no' && this.dtwFormControls.wholesaleBusiness.value == 'yes') {
			if (this.documentAttachments.hydraulicLetter.length == 0) {
				this.hydraulicLetterAttachmentsRequiredShow = true;
			}
			else {
				this.hydraulicLetterAttachmentsRequiredShow = false;
			}
			if (this.documentAttachments.hydraulicDrawings.length == 0) {
				this.hydraulicDrawingsAttachmentsRequiredShow = true;
			}
			else {
				this.hydraulicDrawingsAttachmentsRequiredShow = false;
			}
		} else if (this.minRequirements.hydraulicConsultantRequired == true) {
			if (this.documentAttachments.hydraulicLetter.length == 0) {
				this.hydraulicLetterAttachmentsRequiredShow = true;
			}
			else {
				this.hydraulicLetterAttachmentsRequiredShow = false;
			}
		} else {
			this.hydraulicLetterAttachmentsRequiredShow = false;
			this.hydraulicDrawingsAttachmentsRequiredShow = false;
		}
	}
	isWastesafeTransporterRequired() {
		if (this.isWholesale() ||
			(this.isCommercial() && this.minEquipment.filter(equipment => equipment.name == 'Grease trap').length > 0)) {
			return true;
		} else {
			return false;
		}
	}
	isWholesale() {
		return this.dtwForm.get('wholesaleBusiness').value == 'yes' &&
			this.dtwForm.get('industrialBusiness').value == 'no';
	}
	isIndustrial() {
		return this.dtwForm.get('industrialBusiness').value == 'yes';
	}
	isCommercial() {
		return this.dtwForm.get('wholesaleBusiness').value == 'no' && this.dtwForm.get('industrialBusiness').value == 'no';
	}
}