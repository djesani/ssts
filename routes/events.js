const env = process.env;

const db = require('../lib/db');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  if(env.DB_ENABLED){
    db.query('SELECT * FROM event where enabled = 1', (err,rows) => {
      if(err) throw err;
      const events = JSON.stringify(rows);
      console.log('Got events:');
      console.log(events);

      res.render('events', { title: 'SSTS', events: rows });
    });
  }else{
    console.log("DB not enabled. Returning empty rows");
    res.render('events', { title: 'SSTS', events: [{
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Double Roti (Dhabeli) - Place your orders",
      "description": "To place your orders contact/message your First/Last Name & quantity of portions. (Note:2 pieces per portion).",
      "imageurl": ""
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Pau Bhajji - Place your orders",
      "description": "To place your orders contact/message your First/Last Name & quantity of portions. Each portion feeds 1 person.",
      "imageurl": ""
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Hanuman Jayanti",
      "description": "Please join us for the upcoming event,  Hanuman Jayanti on Saturday 31st March 2018, full programme details is below.",
      "imageurl": "https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/284c38d4-be79-4c1a-817a-d161c7f6533b.png"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "H.H. Acharya Shree Koshalendraprasadji Maharaj",
      "description": "It’s our pleasure to inform all the devotees that Acharya Maharaj Shree 1008 Koshalendraprasadji Maharaj and learned Saints from Shree Swaminarayan Mandir, Kalupur, Ahmedabad will be coming to Sydney. \nArrives in Sydney on Friday 23/03/18 @8:25pm on MH141\nDeparts Sydney for Auckland on Thursday 29/03/28 @ 11:35am on QF145.\nAcharya Maharaj will be gracing our sabha on Saturday 24th March 2018 from 7.30pm. We invite all devotees to come for Darshan and Arshivachan",
      "imageurl": "https://ci3.googleuserdescription.com/proxy/YuZrGmHdvLcLTD_P9T02ZCBGBOWyAche9jTLrLs-ZzB_PaS6uiQB8hUfb6uKiMZHPhlmDInocsXwibVfho_XFFi3j7UA5g1yKC4-zrpt9vN5IXYUCfP7lxZOjFi4k5RpiZw_ADQoyIT0spaFv_toU960KxPRdMow2wjmwlU=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/d59a6935-4302-498b-a966-cb28df18f735.png"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Ram Navmi & Shree Hari Jayanti",
      "description": "Join us to celebrate the upcoming Ram Navmi / Shree Swaminarayan Jayanti - Sunday 25th March 2018.\n\n12:00pm(Afternoon) - Shree Ram Bhagwan Pragatiya Aarti\n\nEvening\n5:30pm - 6:30pm - Nitya Niyam, Katha\n6:30pm - 6:45pm - Abhishek\n6:45pm - 7:00pm - Thaal & Janma Utsav Aarti",
      "imageurl": "https://ci5.googleuserdescription.com/proxy/_o3eDLK_a6vqLopZKxQNm5wW2Je4rHJY7tH1py-fgZ0nPj9MydxNhiMAtlHBRGm9OhNq9uB4nkCYFUk_BzkqvlBgUI1FVn6H-FsbMUfYBFTg7fo9IiM0TiEhb095tU1tCO16hJgkTW4jYoSsMtek1oQNGOOpyiTnecrtAp8=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/2906a9bb-167f-4730-9564-5f5e58634425.png"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Santo Vidaygiri & Prasad Roopi Bhojan",
      "description": "You are invited to attend the evening sabha hosted by Santo from Bhuj Mandir & vidaygiri sabha for the Santo on Wednesday 21st March 2018 from 7.00pm.\n\nNote: Prasad Roopi Bhojan will be served after the sabha.",
      "imageurl": ""
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "3 Day Special Seminar",
      "description": "You are invited to attend a  3-Day Special evening sabha where Santo from Bhuj Mandir will be hosting a Gnaan (Knowledge) seminar to help us get one step closer to Bhagwan.\nFriday 16th March 2018 commencing at 7.30pm\nSaturday 17th March 2018 commencing at 6.00pm. Note: Prasad Roopi Bhojan will be served.\nSunday 18th March commencing at 6.00pm",
      "imageurl": ""
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "GHANSHYAM FAMILY FUN DAY",
      "description": "Your family, friends and you are invited to ‘Ghanshyam Family Fun Day.’\n\nThe event will involve participating in outdoor field team/individual games for both males & females.\n\nAll age groups are encouraged to join the games so make sure you are wearing comfortable footwear. If you want to just relax feel free to bring your own picnic mats/chairs and don't forget your sun scream/hat. \n\nSunday 18th March 2018 from 10.00am to 2.00pm.\nNote: Opening ceremony & Aarti will commence at 9.00am & thereafter teams will be created.\n\nVenue: Tallawong Oval Tallawong Avenue, Blacktown. For direction to the venue: https://goo.gl/DLz63V\n\nLunch will be served.",
      "imageurl": "https://ci5.googleuserdescription.com/proxy/ZpnRh1P9B5296S3zZxk0QSDwnRq1qlCZAxIGBrUiLUZZo7Y1BiNU8Y4ED3bX4QFU1T7rruWs0Tr6a86YtPqcjqF_36lfkZTyfzm-ZWmrtGYgpyhNGH7oBuQVq9I2vo6P8iT7BGaQAB7v_DX-SSn8maadXkdd4HUc-_sz73w=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/abc1f6bb-ef47-4264-9232-e6aa20a19227.jpg"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Katha Parayan 2018",
      "description": "Shree Shatananand Swami rachit Shree Janmamangal Katha has been organised at Shree Swaminarayan Temple – Sydney. \n\nPlease come and listen to the Katha by learned Saints from Shree Swaminarayan Temple – Bhuj Kutch, India.\n\nKatha will commence on Wednesday, 7th March 2018 to 11th March 2018.",
      "imageurl": "https://ci4.googleuserdescription.com/proxy/kQiGAiwdoNwWKDH1_1AC7dYNoVToiswOKgOLI5KS9P2xm00SjoHzZxbEIqYZ_VRfY6QgRFxLzFe4Nq_LUMPoFLO4-_k5v6yUynXdKlX17l_iWtZpF2OowuP40f_0IG6b8505uTdIHcWLscqFbkj8Fc4uFkhKFU7Y87TtPQQ=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/1cd49530-293a-42aa-8069-a22e1aa1e655.jpg"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Narnarayan Dev Jayanti - 2018",
      "description": "Saturday 3rd March 2017 is Shree NarNarayan Dev Jayanti the festival of Fuldol Utsav.\n\nNote: Fuldol Utsav aarti will commence at 7.00pm.",
      "imageurl": "https://ci4.googleuserdescription.com/proxy/OZs-mNYuSpkjnodOWXcUP_v1aDZRDBnzrmYcyy0ZTdFTNNkD1b0PFWKFJzgUqw7jYW3SQZs7MLWEj6IVXMDO_rFxrkWjkStwkIg_V1LhMP3V96cqEWICsOExDrNeXX5AmWdNa0HPxj23E-CyNkTS7DiYyH50W3QRMsBe47g=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/1c9c02e0-537a-49e4-aefa-95c7064c067e.jpg"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Holi Utsav 2018",
      "description": "Join in and let’s play Holi!\n\nThursday 1st March 2018 is Holi the festival of colours. Holika Dahan Poojan will commence outdoors from 7.00pm onwards.\n\nNote: Coloured water will be provided onsite, please bring along your water guns to join in.",
      "imageurl": "https://ci6.googleuserdescription.com/proxy/pW5vyI9-_tdy8Yv4m2FM5NYN8aswmQawnUf0nK2hDMZOtd3T5Cc2vsgc17Ho7Vvla28iacwlUBVlrgan_lVTwYtvkmUUBKWjcdnKvIwBTPqWtyPG10CfzBr0YgXGqOWxEL6LZCHyS1yZyEe66gjEFxDVOl9TpVDHJ_MTL88=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/72708738-b9a8-43be-b38b-8275de322c7b.jpg"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Life Style Seminar - Let's change the world",
      "imageurl": "https://ci4.googleuserdescription.com/proxy/4xavk2sbpXxWfxciPRyYZfZLEJTJhqEXBGXqqDD546n5zLTeipm8f-3YmIHfye5B4QSt5l5Bi1SKl0-z-zNpu5xqYTZLhZmeL3zn2qPKza3jPWFUTPSxCUrtS0w9H5d_oiF-pAtVprKNilz5uRD_gqA4FwfdSOqdmPw4gsM=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/c45859c6-1858-4b06-a257-621b0cc03968.jpg"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Life Style Seminar",
      "imageurl": "https://ci6.googleuserdescription.com/proxy/LNZ2XyfnC8FwmX4USJGJ4pKg2u1aobABfqq9aM8yADIOa7ox13q4e0lKzfqareyvBNw8ac7tSn3gMNURxywSK_Ja4FkdNuSBBpM5nFl03TFrTBNmK5Yk8rVL9Fnkkc8wy3f7jOTXjwfCO6RWINrH2tBh4ZZ1ph17Puj_c-o=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/fb04ae7d-7301-4210-b721-871f1009c7a7.jpg"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Maha Shivratri Utsav 2018",
      "description": "Please join us for the upcoming event, Maha Shivratri -  Tuesday, 13th February 2018 at Shree Swaminarayan Temple - Sydney.\nShiv Poojan & Aarti will be held @ 8.00pm\nIf you would like to be yajman for this utsav, please contact the sevaks inside the Mandir Kothar:\nPoojan Yajman $51\nPrasad Yajman $101\nNote: On this utsav day vrat upvaas is to be observed by devotees. Milk for Abhishek will be provided by the Mandir.",
      "imageurl": "https://ci5.googleuserdescription.com/proxy/FqhsMbjLBhOcxH9phBhh_U6of1qn2pMVRQMA8B8xZICvX22XFFoqAXUcVukg7Clm9NkuVG9EfxIx3UAqtx8q5-1Li6haZ3MkMqtHPo8fiDQzE6pvUoIVWcdMp3pVHwbt5JbwsEsgg3gplf9MMqdcEOJcMHXvpJlAaETRUaw=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/58bcb5af-759e-4ec4-96ea-745ee79125dc.jpg"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Maha Pooja - Sunday 11th February 2018",
      "description": "All devotees are invited to join Maha Pooja which will be conducted on Sunday 11th February 2018, promptly starting at 6.30am in the presence of Bhuj Mandir Santo.\n\nPlease register your names to the mandir Kothar with a seva/donation of $11.00.\n\nJay Shree Swaminarayan",
      "imageurl": "https://ci3.googleuserdescription.com/proxy/099CgHOrlz03JzTCP1SAHQ2ZxcgifyqCjOaxEIIk_3mCwhXBFYiSf_Zx1Zk-s-l_O9In4qulGoN_6OF_9ua44_H8UGF9VX9QvU2jmkWh4B6Uf7OqxKJL-tL9i6hWA3z5mQku_fTC0ruOg4v6VFFol3zXtcVr8Jv_x04wpAo=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/3a129385-2e34-4746-afa3-97cda238e23c.jpg"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Night Sabha - 2018",
      "description": "Please join us for a special unique Night Sabha that will take us a step closer to Maharaj. The sabha will be presented by santo from Bhuj Mandir.\nFriday 9th February 2018 from 7.30pm.\nPrasad Roopi Bhojan will be served\n \nSaturday 10th February 2018 from 6.00pm\nShaak Utsaav & Prasad Roopi Bhojan will be served\nThakarhali Raas Utsav",
      "imageurl": "https://ci6.googleuserdescription.com/proxy/qtW_b32l60cEg2NMTOwfiEpZII_iqywVXcLUiU8M7F7BAmVUjbktw68KOWMbzbo1WPWA0oFOcluHQhqgmDnV9g6QLfjER3zyZgOspSJFlhkL01c1QJcA218WMJgeR6a0ha5qMfEpiR1U4NUc4bx7sOROZnWxB9AXnLzjPN8=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/cab50fce-74a1-4b42-aeed-6b400133050a.jpg"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Lunar Eclipse ",
      "description": "Please be advised that there is a Lunar Eclipse in Sydney on Wednesday, 31st January 2018 at 10:48pm. \n \nEclipse Fast \nStop eating (Drinking of water is allowed) - Wednesday, 31st January 2018 at 01:48pm \n \nStop Drinking of water - Wednesday, 31st January 2018 at 07:48pm \n \nEclipse Starts \nRefrain from touching of clothes - Wednesday, 31st January 2018 at 10:48pm. \n \nEclipse Ends \nTake shower/bath with any touched clothes - Thursday, 01st February 2018 at 02:11am",
      "imageurl": ""
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "Vasant Panchmi & Shikshapatri Jayanti",
      "description": "On Monday, 22th January 2018, we will be celebrating Vasant Panchmi & Shikshapatri Jayanti at Shree Swaminarayan Temple, Sydney.\n\nPlease join us to celebrate this occasion in the presence of santo from Bhuj Mandir. Requesting devotees to bring with them their personal Shikshapatri during the poojan. \n\nDetailed program is shown below:\n 7:00pm - 7:30pm \t Sandhya Aarti, Dhun, Stuti & Thaal\n 7:30pm - 8:30pm \t Shikshapatri Vachan with Poojan\n 8:30pm - 8:35pm \t Shikshapatri Aarti\n 8:35pm - 9:00pm \t Kirtan, Dhun & Chesta\nLord Shree Swaminarayan, gifted mankind 212 versed Shikshapatri for the welfare of His disciples and whoever joins the sect. It serves as a fundamental code of conduct encompassing everything from basic civic norms i.e. from personal hygiene to social ethics, up to universal philosophy and spirituality. It is the essence of all the Scriptures including the Vedas. He Himself mentions within that His words are His form hence we worship the Shikshapatri on this day and pay our respectful obeisance unto Him; the benefactor of All.",
      "imageurl": "https://ci3.googleuserdescription.com/proxy/xCMtVntEoJgKRpcU2AcMDr7J0G_0ebRUSzp1AKcE5h-e-KehBtddKTsNSiyTSbk5KLz4G0wqoAs3VPOXTupqbwAvBOZVNxxcTDBxcVsfAIuhkuDq2wN8xkW3rWTn8JoN_JNrY3Dqe8esP4dgc1Pm1X9NIQPcF4inFUPcqS4=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/e1a379e3-fada-4086-bdcc-832cb4b1519c.jpg"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "5th Patotsav  - Timetable of Events",
      "description": "Join us for our 5th Anniversary Celebrations. The event will be graced by learned Saints from Shree Swaminarayan Temple Bhuj, who will recite holy scripture Shreemad Satsangi Jeevan composed by Shatanand Muni. Be sure not to miss the divine wisdom within this scripture written as a discourse between Suvrat Muni and Pratapsinhraja on the divine banks of Chakratirth.\n\nMahotsav Timeline of Events\n\n15-01-2018 = Monday\nMorning\n11:30am: Vastu Poojan of the new Shree Ghanshyam Academy in presence of Saints\nEvening\n8pm: Welcoming ceremony for the Saints from Bhuj Mandir\n \n16-01-2018 = Tuesday\nMorning\n9am: Purify ceremony for those Haribhaktos sitting for the Vishnuyag Havan\nEvening\n6pm Sandhya Aarti\n7pm: Pothi Yatra with Band & Lezium playing along\nAfter Pothi yatra Deep Pragatiya and Welcoming ceremony of Shree Narnarayan dev Gadi His Holiness Archaya 1008 Shree Kolshendraprasadji maharaj.\nWelcoming ceremony of local and overseas guests.\n8pm to 9pm: Prasadroop bhojan will be served\n\n17-01-2018 = Wednesday\nMorning\n8am Aarti\n8.30am: Katha Poojan\n8.30am Start of Vishnuyaag\n9.30am to 10.30am: Morning Katha\n10.30am to 11.00am: Vyakhan Mala by Swami Shreerangdasji\nEvening\n6.30pm: Aarti\n7pm to 8pm: Evening Katha with Janmotsav utsav of Shree Ghanshyam Maharaj\n8pm to 9pm: Prasadroop Bhojan after Katha\n9pm to 10pm: History Quiz Night\n \n18-01-2018 = Thursday\nMorning\n7:30am in the Presence of His Holiness His Holiness Acharya 1008 Shree Kolshendraprasadji maharaj, Bhuj Mandir saints, Abhisek Poojan of Shree Ghanshyam Maharaj after poojan Maha Abhisek thereafter Abhishek Aarti\n8am Aarti\n9am to 10am: Katha\n10:00am: Ankoot Utsav, Ankoot Aarti\n10:30am: Flag ceremony on top of Shikar afterwards Grand Opening Ceremony of the new Shree Ghanshyam Academy with the Presence of His Holiness His Holiness Archaya 1008 Shree Kolshendraprasadji maharaj, Bhuj Mandir Mahant Swami Purani Dharmananad Swami.\nAfternoon\n12pm: Vishuyaag Closing Ceremony\n12.30pm Prasadroop Bhojan\nEvening\n6.30pm: Aarti\n7pm to 8pm: Evening Katha with Shree Swaminarayan Bhagwan Gadi pithabishek utsav afterwards Maha Aarti\n8pm to 9pm: Prasadroop Bhojan after Katha\n9pm to 10pm: Gents Stage Program\n\n19-01-2018 = Friday\nMorning\n8am Aarti\n9am to 10am: Katha\n10am: Vyakhan Mala by Swami Ghanshyamswarupdasji\nEvening\n6.30pm: Aarti\n7pm to 8pm: Evening Katha with Shree Swaminarayan Bhagwan no Pushpdolstsav celebration \n8pm to 9pm: Prasadroop Bhojan after Katha\n9pm to 10pm: Gents Stage Program\n\n20-01-2018 = Saturday\nMorning\n9am to 10am: Morning Katha\n10am: Vyakhan Mala by Swami Ishwarswarupdasji\nEvening\n4pm to 6pm: Shree Ghanshyam Maharaj Rajupchar Utsav with presence of Band and Leziem Team\n6.30pm: Aarti\n7pm to 8pm: Evening Katha with Shree Swaminarayan Bhagwan no Deepotsav utsav\n8pm to 9pm: Prasadroop Bhojan after Katha\n9pm to 10pm:  Kirtan- Sangeet along with Raasutsav\n \n21-01-2018 = Sunday\nMorning\n6:30am to 7:30am: Mahapooja\n9am to 10am: Morning Katha\n10am: Vyakhan Mala by Swami Harimukhanddasji\nBlessings from Vadil Santos\nMahotsav Closing Ceremony\n \nNote: Chadravs for the mini katha utsav will be carried on Tuesday 16th January 2018.\n\nYour assistance is required for Prasad Roop bhojan preparation on the following:\nTuesday 16th at 2pm\nWednesday 17th at 9am for Ankoot preparation & 2pm for evening preparation\nThursday 18th at 4am for Ankoot preparation\nFriday 19th at 2pm\nSaturday 20th at 7am\nSunday 21st at 7am",
      "imageurl": "https://ci6.googleuserdescription.com/proxy/fM3ll-aQnrS-wrNkQasY-KholJBSBLJolQ7zDrhqp5ZFAqLHFE1Nki1Clc0IcYYsGFH-nRl9pj3GExc7pZwlFZjf9eyA_9xZAk1x4h4raWCHfFJ_m16pdiuTzaTogWo85nzTg1KNOvz6gfRX9UqTI_jfhHJu2vCiQ7wBREI=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/222c1f66-5cae-4e03-9c9e-bd7e6c9d186e.png"
    },
    {
      "startDate": 1530938992000,
      "endDate": 1530938992000,
      "name": "5th Patotsav  - Uniform Colours",
      "imageurl": "https://ci6.googleuserdescription.com/proxy/3Vqv-wg9yV1u9EXttIxL8K9Wf0kVuNHSncsQT3ROWXBtVB_HF6OZKl0CjiB1MxQAQNZUcKI9lpZ4acCKDnRS-OYr1qoWNJ7C__BuYClBbByJ5OsR2QktgeQDakOhTpq-HupdxZLetV0Lgm0KIXGvvu3jf5Ln-v7lSThfXA8=s0-d-e1-ft#https://gallery.mailchimp.com/6aaa57bbeb240f1a932b0a074/images/6a6794a8-e727-4fe2-90c6-b5150525bb31.png"
    }] });
  }
});

module.exports = router;
