(()=>{"use strict";var e,t,c,i;function a(){$(".select2-show-search").select2({minimumResultsForSearch:"",width:"100%"})}function o(e){return e.id?$('<span><img src="http://127.0.0.1:8000/assets/images/users/'+e.element.value.toLowerCase()+'.jpg" class="rounded-circle avatar-sm" /> '+e.text+"</span>"):e.text}c=document.querySelector(".product-description-list"),i=document.querySelector(".product-description-each"),function(){function e(e){c.removeChild(e.target.parentElement)}setInterval((function(){setTimeout((function(){for(var t=document.querySelectorAll(".delete-row-btn"),c=0;c<t.length;c++)t[c].addEventListener("click",e)}),1)}),1)}(),e=i.cloneNode(!0),t=document.querySelector(".add-invoice-item-btn"),e=i.cloneNode(!0),t.addEventListener("click",(function(){var t=e.cloneNode(!0);c.appendChild(t),a()})),$((function(){$("#inv-datepicker").datepicker({autoclose:!0,format:"dd-mm-yyyy",todayHighlight:!0}).datepicker("update",new Date),$("#due-datepicker").datepicker({autoclose:!0,format:"dd-mm-yyyy",todayHighlight:!0}).datepicker("update"),$("#timelogfrom-datepicker").datepicker({autoclose:!0,format:"dd-mm-yyyy",todayHighlight:!0}).datepicker("update",new Date),$("#timelogto-datepicker").datepicker({autoclose:!0,format:"dd-mm-yyyy",todayHighlight:!0}).datepicker("update")})),$(".select2").select2({minimumResultsForSearch:1/0,width:"100%"}),a(),$(".select2-client-search").select2({templateResult:o,templateSelection:o,escapeMarkup:function(e){return e}})})();