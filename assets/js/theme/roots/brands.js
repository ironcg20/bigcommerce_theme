import $ from 'jquery';

export default function loaded() {
    // subcategory display
    if ($('.page-content-subcategories .image-wrap:not(.image-placeholder)').length > 0) {
        $('.page-content-subcategories ul').addClass('subcategory-grid');
    }
}
