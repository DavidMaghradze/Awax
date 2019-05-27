// Header Slider
const sliderItems = document.querySelectorAll('.slide');
const circles = document.querySelectorAll('.circles li');
function reset() {
    for(var i=0; i<sliderItems.length; i++) {
        if (i==3) {
            break;
        }
        sliderItems[i].style.display='none';
        circles[i].className='';
    };
}
reset();
sliderItems[0].style.display='block';
circles[0].className='active';

circles.forEach(function(item, index){
    circles[index].addEventListener('click', function(){
        reset();
        sliderItems[index].style.display='block';
        circles[index].className='active';
    });
});

// Phone 

document.querySelector('#call-icon').addEventListener('click', showCallItem);
const callItem = document.querySelector('#call-item');

function showCallItem() {
    callItem.style.display = 'block';

    const name = document.querySelector('input[name="name"]');
    const phone = document.querySelector('input[name="phone"]');
    const callBtn = document.querySelector('#call-submit');

    name.addEventListener('blur', nameValidate);
    phone.addEventListener('blur', phoneValidate);
    callBtn.addEventListener('click', callSubmit);

    function nameValidate() {
        const re = /^([a-zA-Z ]){2,30}$/;

        if(!re.test(name.value)) {
           const message = document.createElement('P');
           message.innerText='Please Insert Valid Name';
           message.style.textAlign='left';
           message.style.color='red';
           name.parentElement.appendChild(message);

           setTimeout(()=>message.remove(), 3000);

           if(name.value==="") {
            message.remove();
        }
        }
    };

    function phoneValidate() {
        const re = /^5[1-9]{2}( ?-?[1-9]{3})( ?-?[1-9]{3})?$/;

        if(!re.test(phone.value)) {
           const message = document.createElement('P');
           message.innerText='Please Insert Valid Phone Number';
           message.style.textAlign='left';
           message.style.color='red';
           phone.parentElement.appendChild(message);

           setTimeout(()=>message.remove(), 3000);

           if(phone.value==="") {
            message.remove();
        }
        }
    };

    function callSubmit(e) {
        e.preventDefault();
        const re1 = /^([a-zA-Z ]){2,30}$/;
        const re2 = /^5[1-9]{2}( ?-?[1-9]{3})( ?-?[1-9]{3})?$/;

        if(name.value==="" || phone.value==="") {
            const div = document.createElement('div');
            div.className='error';
            div.textContent='Please Fill all Fields';
            callBtn.parentElement.appendChild(div);
            setTimeout(()=>div.remove(), 3000);
        } else if(!re1.test(name.value)) {
            const div = document.createElement('div');
            div.className='error';
            div.textContent='Please Chek all Fields';
            callBtn.parentElement.appendChild(div);
            setTimeout(()=>div.remove(), 3000);
        } else if(!re2.test(phone.value)) {
            const div = document.createElement('div');
            div.className='error';
            div.textContent='Please Chek all Fields';
            callBtn.parentElement.appendChild(div);
            setTimeout(()=>div.remove(), 3000);
        } else {
            const div = document.createElement('div');
            div.className='send';
            div.innerHTML=`<h1>done!</h1>
                           <p>We will soon get back to you.</p>
            `
            callBtn.parentElement.appendChild(div);
            name.value="";
            phone.value="";
            setTimeout(()=>div.remove(), 5000);
        }
    }

    document.body.addEventListener('click', (e)=>{
        if(e.target.id==="call-item") {
            callItem.style.display = 'none';
        }
    });
};

$( document ).ready(function() {

    $('.hamburger').click(()=>{
        $('.hamburger span').toggleClass('close-button');
        $('.header-menu').toggleClass('opened');
    })
    
    // Smooth scrolling
	var scrollLink = $('.scroll');
    var navbarHeight = $('#navbar').height();

	// var headerHeight = $('#header').height();
	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top - 80
		}, 1000)
    });
    
    // Active link switching
	$(window).scroll(function(){
        var servicesLocation = $('#services').offset().top;
		var scrollBarLocation = $(this).scrollTop()+120;

		scrollLink.each(function(){
			var sectionOffset = $(this.hash).offset().top

			if (sectionOffset <= scrollBarLocation) {
				$(this).addClass('active');
				$(this).parent().siblings().children().removeClass('active');
			} else {
				$('.scroll').children().removeClass('active');
			}
        })
    });


    $('.slider-indicators li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.projects-item-desc').click(()=>{
        $('.projects-item-details').css('display', 'flex');

        $(document).click(e=>{
            if (e.target.className==="projects-item-details") {
                $('.projects-item-details').hide();
            }
        })
    })
 });