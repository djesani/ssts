# jQuery-Inline-Popup

A jQuery Plugin to show content/image within an inline frame using a simplified jQuery code that enable users to expand preview as can be seen in Google Image.

Here the steps to configure...

**Step 1 \:** Download and link to the Jquery plugin

**Step 2 \:** Download and link to the Jquery inlinePopup plugin

**Step 3 \:** Fire the jQuery inlinePopup Plugin 
```javascript
$(document).ready(function(){
  $("#wrapper-container").inlinePopup({itemSelector : ".items"})
});
```

## Plugin Options

*  **itemSelector**<br/>
_Child class.Click event will be added to these child elements._(eg:".items")
*  **ipclass**<br/>
_Inline popup wrapper element class._(Default : inlinepopup)
*  **ipcloseclass**<br/>
_Inline popup close element class._(Default : inlinepopupClose)
*  **iparrowclass**<br/>
_Inline popup arrow element class._(Default : inlinepopup_arrow)
*  **ipcontentwrapperclass**<br/>
_Inline popup content wrapper element class._(Default : inlinepopup\_content)
*  **detailsElem**<br/>
_Class of the element which has preview/detailed content._(Default : ip\-details)
*  **activeFirst**<br/>
_Make first child as active element by default._(default : true)
*  **scrollToViewPort**<br/>
_While showing the expanded preview.Automatically page will scroll to the inlinePopup section._(default : true)
*  **arrow**<br/>
_Add arrow in inlinePopup._(default : true)
*  **scrollOffset**<br/>
_If the page have sticky header.Add the header height._(default : 0)
*  **closeinnerelem**<br/>
_Close inner/child elem or Close text._(default : &lt;i class='fa fa-close'&gt;&lt;/i&gt;)

## Getting started

### HTML

Include the inlinePopup .js file in your site.
```html
<script src="/path/jquery-inline-popup.min.js"></script>
```

InlinePopup works on a container element with a group of similar child items.

```html
<div id="wrapper-container">
  <div class="items">
    ...
    <div class="ip-details">..
      (detailed content/large image for preview )..
    </div>
  </div>
  <div class="items">
    ...
    <div class="ip-details">..
      (detailed content/large image for preview )..
    </div>
  </div>
  ...
</div>
```

### CSS

All sizing of items is handled by your CSS.

```css
#wrapper-container { position:relative; }
.items { width:250px; height:250px; float:left; }
.ip-details { display:none; }
.inlinepopup {  width:100%; float:left; }
```

### Initialize with jQuery
```javascript
$("#ip-container").inlinePopup({
  "itemSelector":".article",
  "ipcloseclass":"inlinepopupClose",
  "iparrowclass":"inlinepopup_arrow",
  "ipcontentwrapperclass":"inlinepopup_content",
  "closeinnerelem":"X"
})
```



