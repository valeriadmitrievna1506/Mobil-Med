window.paddingRightItems = "#page-header";
var bodyScrollOptions = {
    reserveScrollBarGap: !0
};

function openModal(e) {
    0 < $(e).length && ($(e).trigger("beforeOpenModal").addClass("active"), setTimeout(function() {
        $(e).addClass("fadeIn").trigger("afterOpenModal")
    }, 50), bodyScrollLock.clearAllBodyScrollLocks(), bodyScrollLock.disableBodyScroll(e, bodyScrollOptions))
}

function closeModals() {
    $(".popup-block.active").trigger("beforeCloseModal").removeClass("fadeIn"), setTimeout(function() {
        $(".popup-block.active").removeClass("active", function() {
            bodyScrollLock.clearAllBodyScrollLocks()
        }).trigger("afterCloseModal"), bodyScrollLock.clearAllBodyScrollLocks()
    }, 200)
}

function isNumberKey(e) {
    var t = e.which ? e.which : event.keyCode;
    return !(43 != t && 31 < t && (t < 48 || 57 < t))
}
$(document).keydown(function(e) {
    27 == e.keyCode && closeModals()
}), $(document.body).on("click", '[data-toggle="switch-modal"]', function(e) {
    e.preventDefault();
    var t = $(this).attr("data-target");
    $(".popup-block:not(:hidden)").fadeOut(200), $(t).fadeIn(200), bodyScrollLock.disableBodyScroll($(t)[0], bodyScrollOptions)
}), $(document.body).on("click", '[data-toggle="modal"]', function(e) {
    e.preventDefault(), openModal($(this).attr("data-target"))
}), $(document.body).on("click", ".popup-block__overlay", function(e) {
    $(this).children('[data-toggle="modal-dismiss"]');
    e.target == this && closeModals()
}), $(document.body).on("click", '[data-toggle="modal-dismiss"]', function(e) {
    e.preventDefault(), closeModals()
}), $(document).off("cut copy paste", ".no-paste").on("cut copy paste", ".no-paste", function(e) {
    e.preventDefault()
}), $("input, textarea").each(function(e) {
    "" != $(this).val() ? $(this).addClass("not-empty").parent().addClass("not-empty") : $(this).removeClass("not-empty").parent().removeClass("not-empty")
}), $(document).off("change focusout keydown keypress input", "input, textarea").on("change focusout keydown keypress input", "input, textarea", function(e) {
    "" != $(this).val() ? $(this).addClass("not-empty").parent().addClass("not-empty") : $(this).removeClass("not-empty").parent().removeClass("not-empty")
}), $(document).off("focusin", "input, textarea").on("focusin", "input, textarea", function(e) {
    $(this).parent().addClass("focused")
}), $(document).off("focusout", "input, textarea").on("focusout", "input, textarea", function(e) {
    $(this).parent().removeClass("focused")
}), $(document).off("keypress keyup blur", ".only-digits").on("keypress keyup blur", ".only-digits", function(e) {
    $(this).val($(this).val().replace(/[^0-9]/g, "")), (e.which < 48 || 57 < e.which) && e.preventDefault()
}), $(document).off("keypress keyup blur", 'input[type="tel"]').on("keypress keyup blur", 'input[type="tel"]', function(e) {
    $(this).val($(this).val().replace(/[^0-9\+]/g, "")), isNumberKey(e) || e.preventDefault()
}), $(document).off("keypress keyup blur", ".only-floats").on("keypress keyup blur", ".only-floats", function(e) {
    $(this).val($(this).val().replace(/[^0-9\,.]/g, "")), -1 == $(this).val().indexOf(".") && -1 == $(this).val().indexOf(",") || !(e.which < 48 || 57 < e.which) || e.preventDefault()
}), $(document).off("click", '[data-toggle="clear-input"]').on("click", '[data-toggle="clear-input"]', function(e) {
    e.preventDefault(), $(this).parent().find("input").val("").trigger("change")
}), $('[data-toggle="scroll-to-top"]').click(function(e) {
    e.preventDefault(), $("html,body").animate({
        scrollTop: 0
    }, 600)
}), $('[data-toggle="anchor"]').click(function(e) {
    e.preventDefault();
    var t = $(this).attr("data-target"),
        o = $(t).offset().top - 150;
    $("html,body").animate({
        scrollTop: o
    }, 400)
}), $('[data-toggle="tab"]').click(function(e) {
    e.preventDefault();
    var t = $(this).attr("data-target");
    $(this).parent().is("li") ? $(this).addClass("active").parent().addClass("active").siblings().removeClass("active").children().removeClass("active") : $(this).addClass("active").siblings().removeClass("active"), $(t).addClass("active").siblings().removeClass("active")
}), $('input[type="number"]').on("keydown", function(e) {
    -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) || /65|67|86|88/.test(e.keyCode) && (!0 === e.ctrlKey || !0 === e.metaKey) && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && e.keyCode <= 40 || (e.shiftKey || e.keyCode < 48 || 57 < e.keyCode) && (e.keyCode < 96 || 105 < e.keyCode) && e.preventDefault()
}), $.extend($.validator.messages, {
    required: "\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435",
    email: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 E-mail",
    url: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 URL",
    date: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0434\u0430\u0442\u044b",
    number: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0438\u0444\u0440\u044b",
    digits: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0438\u0444\u0440\u044b",
    creditcard: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",
    equalTo: "\u041f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c",
    maxlength: jQuery.validator.format("\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - {0} \u0437\u043d\u0430\u043a\u043e\u0432"),
    minlength: jQuery.validator.format("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - {0} \u0437\u043d\u0430\u043a\u043e\u0432"),
    rangelength: jQuery.validator.format("\u0414\u043b\u0438\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043c\u0435\u0436\u0434\u0443 {0} \u0438 {1} \u0437\u043d\u0430\u043a\u0430\u043c\u0438"),
    range: jQuery.validator.format("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0438\u0444\u0440\u0443 \u043c\u0435\u0436\u0434\u0443 {0} \u0438 {1}"),
    max: jQuery.validator.format("\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 - {0}."),
    min: jQuery.validator.format("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 - {0}.")
}), $.validator.methods.email = function(e, t) {
    return this.optional(t) || /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)
}, $.validator.addMethod("lettersonly", function(e, t) {
    return this.optional(t) || /^[a-z\u0430-\u044f\u0451\-\s]+$/iu.test(e)
}, "\u0412\u0432\u043e\u0434\u0438\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b"), $.validator.methods.number = function(e, t) {
    return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:[\s\.,]\d{3})+)(?:[\.,]\d+)?$/.test(e)
}, $.validator.methods.range = function(e, t, o) {
    var a = e.replace(",", ".");
    return this.optional(t) || a >= o[0] && a <= o[1]
}, $.validator.methods.min = function(e, t, o) {
    return e = e.replace(",", "."), this.optional(t) || o <= e
}, $.validator.methods.max = function(e, t, o) {
    return e = e.replace(",", "."), this.optional(t) || e <= o
}, $(document).ready(function() {
    $(".form-validate").each(function() {
        $(this).validate({
            validateDelegate: function() {},
            onsubmit: !0,
            errorElement: "div",
            errorPlacement: function(e, t) {
                switch (e.addClass("invalid-feedback"), t.prop("type")) {
                    case "select-one":
                        e.appendTo(t.parent());
                        break;
                    case "checkbox":
                    case "radio":
                        e.insertAfter(t.parent());
                        break;
                    default:
                        e.insertAfter(t)
                }
            },
            highlight: function(e, t, o) {
                $(e).addClass("is-invalid").parent().addClass("is-invalid")
            },
            unhighlight: function(e, t, o) {
                $(e).removeClass("is-invalid").parent().removeClass("is-invalid")
            },
            focusInvalid: !1,
            invalidHandler: function(e, t) {
                var o, a, s;
                t.numberOfInvalids() && (o = $(t.errorList[0].element), "select-one" !== $(o).prop("type") && "radio" !== $(o).prop("type") && "checkbox" !== $(o).prop("type") || (o = $(o).parent()), 0 < $(o).parents(".popup-block").length ? (a = $(this).parents(".popup-block"), s = $(a).scrollTop() + $(o).offset().top - 120, $(a).animate({
                    scrollTop: s
                }, 400)) : (s = $(o).offset().top - 120, $("html, body").animate({
                    scrollTop: s
                }, 400)))
            },
            ignore: ".tab-pane:hidden *, :disabled, .no-validate"
        }), setTimeout(function() {
            $(this).find(".num-input").each(function() {
                $(this).rules("add", {
                    required: !0,
                    number: !0
                })
            }), $(this).find('[type="email"]').each(function() {
                $(this).rules("add", {
                    required: !0,
                    email: !0
                })
            })
        }, 0)
    });

    $('.footer-menu .footer-title').click(function(e){
        e.preventDefault();
        $('.footer-menu .footer-menu-items').hide();
        $(this).closest('.footer-menu').find('.footer-menu-items').show();
        return false;
    });

}), $(window).on("scroll load orientationchange", function() {
    100 < $(this).scrollTop() && !$("body").hasClass("scrolled") ? $("body").addClass("scrolled") : $(this).scrollTop() <= 100 && $("body").hasClass("scrolled") && $("body").removeClass("scrolled")
}), $(".populars-slider").slick({
    slidesToShow: 5,
    customPaging: function(e, t) {
        return '<span class="slick-dot"></span>'
    },
    nextArrow: '<div class="populars-slider__arr-next"><svg xmlns="http://www.w3.org/2000/svg" width="20.5" height="33.816" viewBox="0 0 20.5 33.816"><path id="slider-arrow-right" d="M1496.319,591.485l-20.5-16.908v33.816Z" transform="translate(-1475.819 -574.577)"/></svg></div>',
    prevArrow: '<div class="populars-slider__arr-prev"><svg xmlns="http://www.w3.org/2000/svg" width="20.5" height="33.816" viewBox="0 0 20.5 33.816"><path id="slider-arrow-left" d="M417.553,591.485l20.5-16.908v33.816Z" transform="translate(-417.553 -574.577)"/></svg></div>',
    dots: !0,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 576,
        settings: {}
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1
        }
    }]
}), $(".search-form__input").click(function() {
    $(".search-results").show()
}), $(document).mouseup(function(e) {
    var t = $(".search-results"),
        o = $(".popup-basket");
    t.is(e.target) || 0 !== t.has(e.target).length || t.hide(), o.is(e.target) || 0 !== o.has(e.target).length || o.hide()
}), $(".phone-mask").inputmask({
    mask: '(999) 999"999"999',
    showMaskOnHover: !0
}), $(".form__field-input-datepicker").datepicker({
    autoClose: !0,
    position: "bottom left"
}), $(".select").select2({
    minimumResultsForSearch: -1,
    width: "100%",
    placeholder: function() {
        $(this).data("placeholder")
    }
}), $(".tabs__nav-item").click(function() {
    var e = $(this).data("tab");
    $(this).addClass("active").siblings("").removeClass("active"), $(".tabs__content").removeClass("active"), $(".tabs__content-" + e).addClass("active")
}), $(".header__menu-btn").click(function() {
    $(this).toggleClass("open"), $(".mobile-menu").slideToggle()
}), $(".header__cart").click(function(e) {
    e.preventDefault(), $(".popup-basket").toggle()
}), $(".tooltip").tooltipster({
    theme: "tooltipster-shadow",
    side: ["top", "left", "bottom", "right"]
});