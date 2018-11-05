/**
* JQuery Inline Popup
* Copyright (c) 2017 Position2 Inc.
* Licensed under MIT (http://opensource.org/licenses/MIT)
* https://github.com/Position2/jQuery-Inline-Popup
*/
(function($) {
  var defaults = {  "itemSelector"          : "",
                    "ipclass"               : "inlinepopup",
                    "ipcloseclass"          : "inlinepopupClose",
                    "iparrowclass"          : "inlinepopup_arrow",
                    "ipcontentwrapperclass" : "inlinepopup_content",
                    "detailsElem"           : "ip-details",
                    "activeFirst"           : true,
                    "scrollToViewPort"      : true,
                    "arrow"                 : true,
                    "scrollOffset"          : 0,
                    "closeinnerelem"         : "<i class='fa fa-close'></i>" };
  $.fn.isOnScreen = function() {
    var w=$(window),vp={top:w.scrollTop(),left:w.scrollLeft()},bounds=this.offset();
    vp.right = vp.left + w.width(); 
    vp.bottom = vp.top + w.height();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(vp.right < bounds.left||vp.left > bounds.right||vp.bottom < bounds.top||vp.top > bounds.bottom));
  };
  $.fn.inlinePopup = function(options) {
    if (this.length === 0) { return this; }
    if (this.length > 1) {
      this.each(function() { $(this).inlinePopup(options); });
      return this;
    }
    var inlinePopup = {}, ds = this;
    var init = function() {
      inlinePopup.settings = $.extend({}, defaults, options);
      var ipSelector = $(ds).find(inlinePopup.settings.itemSelector);
      if(ipSelector.size() <= 0 ) console.log("Selector not present");
      else {
        ds.setDataRow();
        ipSelector.click(function() {
          var curAct = $(this)
          if(!curAct.hasClass("active")) {
            placeDesc(curAct,curAct.siblings(inlinePopup.settings.itemSelector).filter(".active"),null,"click");
            curAct.addClass("active").siblings(inlinePopup.settings.itemSelector).removeClass("active");
          } else {
            closeDesc($(ds).find("."+inlinePopup.settings.ipclass));
          }
        });
        if(inlinePopup.settings.activeFirst) firstActive();
      }
    };
    var createDesc = function() {
      var previewElem         = $("<div/>", { class: inlinePopup.settings.ipclass }),
          previewElemArrow    = $("<div/>", { class: inlinePopup.settings.iparrowclass }).hide(),
          previewElemContent  = $("<div/>", { class: inlinePopup.settings.ipcontentwrapperclass }),
          previewElemClose    = $("<span/>", { class: inlinePopup.settings.ipcloseclass , html : inlinePopup.settings.closeinnerelem });
       previewElemArrow.add(previewElemContent).add(previewElemClose).appendTo(previewElem);
       return previewElem; 
    };
    var placeDesc = function(current,lastActive,stVP,event) {
      var current   = current || $(ds).find(inlinePopup.settings.itemSelector).filter(".active"),
          lastAct   = lastActive || "",
          event     = event || "",
          stVP      = typeof(stVP)=="boolean" ? stVP : true,
          curRowNo  = current.attr("data-row"),
          lasRowNo  = lastAct != "" ? lastAct.attr("data-row") : 0,
          curRow    = $(ds).find(inlinePopup.settings.itemSelector).filter("[data-row='"+curRowNo+"']:visible");
          descElem  = ($(ds).find("."+inlinePopup.settings.ipclass).size() < 1 ) ? createDesc().hide() : $(ds).find("."+inlinePopup.settings.ipclass).css("height",""),
          dpCont    = current.find("."+inlinePopup.settings.detailsElem).html() || "";
      descElem.find("."+inlinePopup.settings.ipcontentwrapperclass).html(dpCont);
      if(lasRowNo != curRowNo) {
        descElem.hide();
        descElem.insertAfter(curRow.last());
      }
      if(dpCont.trim()!="") {
        (event == "click") ? descElem.stop().slideDown() : descElem.show().height("");
        if(inlinePopup.settings.scrollToViewPort && stVP && event != "resize")
          scrollToVP(current)
        else if(inlinePopup.settings.scrollToViewPort && stVP && event == "resize" && $(ds).find("."+inlinePopup.settings.ipcontentwrapperclass).isOnScreen())
          scrollToVP(current)
      } else
        descElem.hide();
      inlinePopup.settings.arrow ? placeArrow(current,descElem) : "";
    };
    var placeArrow = function(c,de) {
      var arrow     = de.find("."+inlinePopup.settings.iparrowclass),
          arrowLeft = c.position().left + ((c.outerWidth()/2) - (arrow.outerWidth()/2));
      arrow.css({ "left": arrowLeft + "px" }).show();
    };
    var scrollToVP = function(e,callback) { 
      var scrollTo = e.offset().top - inlinePopup.settings.scrollOffset,
          doc      = $('html, body'),
          diff     = Math.abs(doc.scrollTop() - scrollTo);
      (scrollTo > 10 && diff > 10) ? doc.stop().animate({ scrollTop: scrollTo },callback) : typeof(callback) == "function" ? callback() : "";
    };
    var closeDesc = function(e) {
      $(e).stop().slideUp(function() {
        $(this).siblings(inlinePopup.settings.itemSelector).filter(".active").removeClass("active");
        $(this).remove();
      })
    };
    var firstActive = function() {
      $(ds).find(inlinePopup.settings.itemSelector).eq(0).addClass("active");
      placeDesc(null,null,false);
    };
    var isDevice = function() {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() < 768);
    };
    this.setDataRow = function() {
      var firstLeft = $(ds).find(inlinePopup.settings.itemSelector).filter(":visible").offset().left,
          currentRow = 0,
          activeElem = "",
          prevLeft = firstLeft;
      $(ds).find("."+inlinePopup.settings.ipclass).hide();
      $(ds).find(inlinePopup.settings.itemSelector).filter(":visible").each(function() {
        var cur  = $(this), 
        curLeft  = cur.offset().left;
        if(curLeft <= prevLeft) currentRow += 1;
        prevLeft = curLeft;
        cur.attr("data-row", currentRow);
      });
      return ds;
    }
    init();
    $("body").on("click","."+inlinePopup.settings.ipclass+" ."+inlinePopup.settings.ipcloseclass,function(e) {
      closeDesc($(this).parents("."+inlinePopup.settings.ipclass)[0]);
    })
    var prop_resize_timer = "",
        trigger = isDevice() ? "orientationchange" : "resize";
    $(window).on(trigger,function() {
      clearTimeout(prop_resize_timer);
      prop_resize_timer = setTimeout(function(){
        ds.setDataRow();
        if($(ds).find(inlinePopup.settings.itemSelector).filter(".active").size() > 0) {
          placeDesc(null,null,true,"resize");
        }
      }, 500);
    }) 
    return this;
  }
})(jQuery);