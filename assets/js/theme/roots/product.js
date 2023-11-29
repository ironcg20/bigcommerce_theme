import $ from 'jquery';

export default function loaded() {
    if ($('#tab-specifications').text().trim() !== '') {
        $('.tab-heading--specs').show();
    }

    $('#form-action-addToCart').on('click', () => {
        const formTop = $('.productView-options form').offset().top;
        const headerHeight = $('.header').height();
        $(window).scrollTop(formTop - headerHeight);
    });
}
