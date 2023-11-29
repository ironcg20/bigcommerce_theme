import $ from 'jquery';

export default function loaded() {
    if ($('#facetedSearch').length <= 0) {
        $('.toggleSidebarBlock').on('click', function toggleLink(e) {
            e.preventDefault();
            const toggleEleId = $(this).attr('href').replace('#', '');
            const toggleEle = document.getElementById(toggleEleId);
            $(this).toggleClass('is-open');
            $(toggleEle).toggleClass('is-open');
        });
    }

    // subcategory display
    if ($('.page-content-subcategories .image-wrap:not(.image-placeholder)').length > 0) {
        $('.page-content-subcategories ul').addClass('subcategory-grid');
    }
}
