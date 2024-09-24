import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: 'components_sections_video_embeds';
  info: {
    displayName: 'Video Embed';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text & Attribute.Required;
    author: Attribute.String;
  };
}

export interface SharedFontColor extends Schema.Component {
  collectionName: 'components_shared_font_colors';
  info: {
    displayName: 'font color';
  };
  attributes: {
    fontColor: Attribute.Enumeration<['light', 'dark']>;
  };
}

export interface SharedDescriptionMedia extends Schema.Component {
  collectionName: 'components_shared_description_medias';
  info: {
    displayName: 'Description Media';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsWorkHeadlineWithImage extends Schema.Component {
  collectionName: 'components_sections_work_headline_with_images';
  info: {
    displayName: 'Post Headline With Image';
    description: '';
  };
  attributes: {
    headline: Attribute.String & Attribute.Required;
    picture: Attribute.Media<'images' | 'videos', true>;
    description: Attribute.Text;
  };
}

export interface SectionsVacancies extends Schema.Component {
  collectionName: 'components_sections_vacancies';
  info: {
    displayName: 'Vacancies';
    description: '';
  };
  attributes: {
    vacancies: Attribute.Component<'elements.vacancies', true>;
  };
}

export interface SectionsVacanciesHeadline extends Schema.Component {
  collectionName: 'components_sections_vacancies_headlines';
  info: {
    displayName: 'Vacancies headline';
  };
  attributes: {
    mainHeadline: Attribute.Text & Attribute.Required;
    headline: Attribute.Text & Attribute.Required;
    headline2: Attribute.Text;
    headline3: Attribute.Text;
  };
}

export interface SectionsTable extends Schema.Component {
  collectionName: 'components_sections_tables';
  info: {
    displayName: 'table';
  };
  attributes: {
    tableMarkdown: Attribute.RichText;
  };
}

export interface SectionsSocialShare extends Schema.Component {
  collectionName: 'components_sections_social_shares';
  info: {
    displayName: 'Social share';
    description: '';
  };
  attributes: {
    facebook: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    linkedin: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String;
  };
}

export interface SectionsServices extends Schema.Component {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    services: Attribute.Component<'elements.service', true>;
    pictureOnRight: Attribute.Boolean & Attribute.DefaultTo<false>;
    media: Attribute.Media<'images' | 'videos', true>;
    logo: Attribute.Media<'images'>;
    fontColor: Attribute.Component<'shared.font-color'>;
    mobLogo: Attribute.Media<'images'>;
    isDarkOverlay: Attribute.Boolean & Attribute.DefaultTo<true>;
    animate: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SectionsServicesHeadlineWithImage extends Schema.Component {
  collectionName: 'components_sections_services_headline_with_images';
  info: {
    displayName: 'Services Headline With Image';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    media: Attribute.Media<'images' | 'videos', true>;
    isParallax: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    name: 'RichText';
    displayName: 'Rich text';
    icon: 'text-height';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsPost extends Schema.Component {
  collectionName: 'components_sections_posts';
  info: {
    displayName: 'Post';
  };
  attributes: {
    post: Attribute.Blocks & Attribute.Required;
  };
}

export interface SectionsPostTitle extends Schema.Component {
  collectionName: 'components_sections_post_titles';
  info: {
    displayName: 'PostTitle';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsPostStatisticWithImage extends Schema.Component {
  collectionName: 'components_sections_post_statistic_with_images';
  info: {
    displayName: 'Post statistic with image';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'elements.some-thing'>;
    statistic: Attribute.Component<'elements.statistic', true>;
    overlay: Attribute.Integer;
  };
}

export interface SectionsPostSection extends Schema.Component {
  collectionName: 'components_sections_post_sections';
  info: {
    displayName: 'Post section';
    description: '';
  };
  attributes: {
    post: Attribute.Component<'elements.post-preview-item', true>;
  };
}

export interface SectionsPostSectionWithImage extends Schema.Component {
  collectionName: 'components_sections_post_section_with_images';
  info: {
    displayName: 'Post section with image';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'elements.test'>;
  };
}

export interface SectionsPostImage extends Schema.Component {
  collectionName: 'components_sections_post_images';
  info: {
    displayName: 'Post image';
  };
  attributes: {
    media: Attribute.Media<'images' | 'videos', true>;
  };
}

export interface SectionsPdf extends Schema.Component {
  collectionName: 'components_sections_pdfs';
  info: {
    displayName: 'pdf';
    description: '';
  };
  attributes: {
    file: Attribute.Media<'files'> & Attribute.Required;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface SectionsPdfHeadline extends Schema.Component {
  collectionName: 'components_sections_pdf_headlines';
  info: {
    displayName: 'PdfHeadline';
  };
  attributes: {
    Headline: Attribute.Text;
  };
}

export interface SectionsPageTitle extends Schema.Component {
  collectionName: 'components_sections_page_titles';
  info: {
    displayName: 'Page Title';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionsNewsPostTitle extends Schema.Component {
  collectionName: 'components_sections_news_post_titles';
  info: {
    displayName: 'News post title';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsNewsPostSection extends Schema.Component {
  collectionName: 'components_sections_news_post_sections';
  info: {
    displayName: 'News post section';
  };
  attributes: {
    newsPost: Attribute.Component<'elements.news-post', true>;
  };
}

export interface SectionsLogosSection extends Schema.Component {
  collectionName: 'components_sections_logos_sections';
  info: {
    displayName: 'Logos section';
    description: '';
  };
  attributes: {
    company: Attribute.Component<'elements.testing', true>;
    showInMobile: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    autoSwitch: Attribute.Boolean & Attribute.DefaultTo<false>;
    bottomPadding: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SectionsInfoBlock extends Schema.Component {
  collectionName: 'components_sections_info_blocks';
  info: {
    displayName: 'Info Block';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    description_2: Attribute.Text;
    description_3: Attribute.Text;
    animate: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SectionsInfoBlockWithImage extends Schema.Component {
  collectionName: 'components_sections_info_block_with_images';
  info: {
    displayName: 'Info Block With Image';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    picture: Attribute.Media<'images' | 'videos', true> & Attribute.Required;
    pictureOnRight: Attribute.Boolean & Attribute.DefaultTo<false>;
    animate: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SectionsImageCarousel extends Schema.Component {
  collectionName: 'components_sections_image_carousels';
  info: {
    displayName: 'Image carousel';
    description: '';
  };
  attributes: {
    imageCarousel: Attribute.Component<'elements.carousel-media', true>;
  };
}

export interface SectionsHeroLargeSection extends Schema.Component {
  collectionName: 'components_sections_hero_large_sections';
  info: {
    displayName: 'Hero Large Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    picture: Attribute.Media<'images', true>;
    poster: Attribute.Media<'images'>;
    video: Attribute.Media<'videos'>;
  };
}

export interface SectionsFullWidthImage extends Schema.Component {
  collectionName: 'components_sections_full_width_images';
  info: {
    displayName: 'Full Width Image';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'videos', true> & Attribute.Required;
  };
}

export interface SectionsCustomerFeedback extends Schema.Component {
  collectionName: 'components_sections_customer_feedbacks';
  info: {
    displayName: 'Customer Feedback';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'elements.feedback', true>;
  };
}

export interface SectionsContacts extends Schema.Component {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'contacts';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    workingTime: Attribute.String & Attribute.Required;
    address: Attribute.String & Attribute.Required;
    phoneNumber: Attribute.String & Attribute.Required;
    email: Attribute.String & Attribute.Required;
    leadFormEmail: Attribute.String & Attribute.Required;
    companyToContact: Attribute.Component<'elements.compy-to-contact', true>;
    formFields: Attribute.Component<'elements.form-fields', true>;
    googleIcon: Attribute.Media<'images'>;
    wazeIcon: Attribute.Media<'images'>;
    buttonTitle: Attribute.String & Attribute.Required;
    privacyCookiesPolicy: Attribute.String & Attribute.Required;
    agreementToReceiveInfo: Attribute.String & Attribute.Required;
    contactEmail: Attribute.String & Attribute.Required;
    navigationAddress: Attribute.String & Attribute.Required;
  };
}

export interface SectionsContactUs extends Schema.Component {
  collectionName: 'components_sections_contact_uses';
  info: {
    displayName: 'Contact us';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'elements.employee', true>;
    title: Attribute.String;
    description: Attribute.Text;
    isContactUsButton: Attribute.Boolean & Attribute.DefaultTo<true>;
    contactEmail: Attribute.String;
    buttonTitle: Attribute.String;
    redirectUrl: Attribute.String;
  };
}

export interface SectionsClientSection extends Schema.Component {
  collectionName: 'components_sections_client_sections';
  info: {
    displayName: 'Client section';
    description: '';
  };
  attributes: {
    feature: Attribute.Component<'elements.client', true>;
    title: Attribute.String;
    Department: Attribute.Component<'elements.department', true>;
  };
}

export interface ElementsVacancies extends Schema.Component {
  collectionName: 'components_elements_vacancies';
  info: {
    displayName: 'Vacancies';
    description: '';
  };
  attributes: {
    vacancyName: Attribute.String & Attribute.Required;
    buttonTitle: Attribute.String & Attribute.Required;
    vacancyDescription: Attribute.Blocks & Attribute.Required;
    contactEmail: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTesting extends Schema.Component {
  collectionName: 'components_elements_testings';
  info: {
    displayName: 'testing';
    description: '';
  };
  attributes: {
    media: Attribute.Media<'images'> & Attribute.Required;
    url: Attribute.String;
    redirectToOurWork: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_slices_testimonials';
  info: {
    name: 'Testimonial';
    displayName: 'Testimonial';
    icon: 'user-check';
    description: '';
  };
  attributes: {
    picture: Attribute.Media<'images'> & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    authorName: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTest extends Schema.Component {
  collectionName: 'components_elements_tests';
  info: {
    displayName: 'post with image';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    pictureOnRight: Attribute.Boolean & Attribute.DefaultTo<false>;
    media: Attribute.Media<'images' | 'videos', true> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsStatistic extends Schema.Component {
  collectionName: 'components_elements_statistics';
  info: {
    displayName: 'Statistic';
  };
  attributes: {
    statistic: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface ElementsSomeThing extends Schema.Component {
  collectionName: 'components_elements_some_things';
  info: {
    displayName: 'Statistic With Image';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    media: Attribute.Media<'images' | 'videos', true>;
    statisticOnRight: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsService extends Schema.Component {
  collectionName: 'components_elements_services';
  info: {
    displayName: 'Service';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ElementsPostPreviewItem extends Schema.Component {
  collectionName: 'components_elements_post_preview_items';
  info: {
    displayName: 'Post Preview Item';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    postUrl: Attribute.String & Attribute.Required;
    media: Attribute.Media<'images' | 'videos', true> & Attribute.Required;
    isNewTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    company: Attribute.String;
  };
}

export interface ElementsPlan extends Schema.Component {
  collectionName: 'components_elements_plans';
  info: {
    name: 'plan';
    displayName: 'Pricing plan';
    icon: 'search-dollar';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    isRecommended: Attribute.Boolean;
    price: Attribute.Decimal;
    pricePeriod: Attribute.String;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    name: 'NotificationBanner';
    displayName: 'Notification banner';
    icon: 'exclamation';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['alert', 'info', 'warning']> &
      Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.Component<'links.link'>;
  };
}

export interface ElementsNewsPost extends Schema.Component {
  collectionName: 'components_elements_news_posts';
  info: {
    displayName: 'newsPost';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    thumbnail: Attribute.Media<'images' | 'videos', true> & Attribute.Required;
    url: Attribute.String;
    buttonTitle: Attribute.String & Attribute.Required;
  };
}

export interface ElementsLocales extends Schema.Component {
  collectionName: 'components_elements_locales';
  info: {
    displayName: 'locales';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    code: Attribute.String & Attribute.Required;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsLeadForms extends Schema.Component {
  collectionName: 'components_elements_lead_forms';
  info: {
    displayName: 'leadForms';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface ElementsHeroLarge extends Schema.Component {
  collectionName: 'components_elements_hero_larges';
  info: {
    displayName: 'Hero Large';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    img: Attribute.Media<'images' | 'videos', true>;
  };
}

export interface ElementsFormFields extends Schema.Component {
  collectionName: 'components_elements_form_fields';
  info: {
    displayName: 'formFields';
    description: '';
  };
  attributes: {
    fieldName: Attribute.String;
    fieldType: Attribute.Enumeration<
      ['text', 'number', 'textArea', 'email', 'select']
    >;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    name: 'FooterSection';
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'links.link', true>;
  };
}

export interface ElementsFeedback extends Schema.Component {
  collectionName: 'components_elements_feedbacks';
  info: {
    displayName: 'feedback';
    description: '';
  };
  attributes: {
    feedback: Attribute.Text & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    position: Attribute.String;
    company: Attribute.String;
    participatingCompany: Attribute.String;
  };
}

export interface ElementsEmployee extends Schema.Component {
  collectionName: 'components_elements_employees';
  info: {
    displayName: 'Employee';
    description: '';
  };
  attributes: {
    position: Attribute.String & Attribute.Required;
    email: Attribute.String;
    media: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String;
  };
}

export interface ElementsDepartment extends Schema.Component {
  collectionName: 'components_elements_departments';
  info: {
    displayName: 'Department';
  };
  attributes: {
    media: Attribute.Media<'images'>;
    url: Attribute.String;
  };
}

export interface ElementsCompyToContact extends Schema.Component {
  collectionName: 'components_elements_compy_to_contacts';
  info: {
    displayName: 'compyToContact';
  };
  attributes: {
    companyTitle: Attribute.String;
  };
}

export interface ElementsClient extends Schema.Component {
  collectionName: 'components_elements_clients';
  info: {
    displayName: 'Client';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    isNewTab: Attribute.Boolean & Attribute.DefaultTo<true>;
    media: Attribute.Media<'images'>;
    participatingCompany: Attribute.String;
  };
}

export interface ElementsCarouselMedia extends Schema.Component {
  collectionName: 'components_elements_carousel_medias';
  info: {
    displayName: 'Carousel media';
    description: '';
  };
  attributes: {
    media: Attribute.Media<'images' | 'videos', true>;
    url: Attribute.String;
    thumbnail: Attribute.Media<'images'>;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    social: Attribute.Enumeration<
      [
        'YOUTUBE',
        'TWITTER',
        'DISCORD',
        'WEBSITE',
        'FACEBOOK',
        'INSTAGRAM',
        'LINKEDIN'
      ]
    >;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary', 'callToAction']>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary', 'callToAction']>;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    button: Attribute.Component<'links.button-link'>;
    navbarLogo: Attribute.Component<'layout.logo'>;
    locales: Attribute.Component<'elements.locales', true>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    logoImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    logoText: Attribute.String;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    socialLinks: Attribute.Component<'links.social-link', true>;
    legalLinks: Attribute.Component<'links.link', true>;
    title: Attribute.String;
    copyright: Attribute.String;
    menuLinks: Attribute.Component<'links.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.video-embed': SharedVideoEmbed;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.font-color': SharedFontColor;
      'shared.description-media': SharedDescriptionMedia;
      'sections.work-headline-with-image': SectionsWorkHeadlineWithImage;
      'sections.vacancies': SectionsVacancies;
      'sections.vacancies-headline': SectionsVacanciesHeadline;
      'sections.table': SectionsTable;
      'sections.social-share': SectionsSocialShare;
      'sections.services': SectionsServices;
      'sections.services-headline-with-image': SectionsServicesHeadlineWithImage;
      'sections.rich-text': SectionsRichText;
      'sections.post': SectionsPost;
      'sections.post-title': SectionsPostTitle;
      'sections.post-statistic-with-image': SectionsPostStatisticWithImage;
      'sections.post-section': SectionsPostSection;
      'sections.post-section-with-image': SectionsPostSectionWithImage;
      'sections.post-image': SectionsPostImage;
      'sections.pdf': SectionsPdf;
      'sections.pdf-headline': SectionsPdfHeadline;
      'sections.page-title': SectionsPageTitle;
      'sections.news-post-title': SectionsNewsPostTitle;
      'sections.news-post-section': SectionsNewsPostSection;
      'sections.logos-section': SectionsLogosSection;
      'sections.info-block': SectionsInfoBlock;
      'sections.info-block-with-image': SectionsInfoBlockWithImage;
      'sections.image-carousel': SectionsImageCarousel;
      'sections.hero-large-section': SectionsHeroLargeSection;
      'sections.full-width-image': SectionsFullWidthImage;
      'sections.customer-feedback': SectionsCustomerFeedback;
      'sections.contacts': SectionsContacts;
      'sections.contact-us': SectionsContactUs;
      'sections.client-section': SectionsClientSection;
      'elements.vacancies': ElementsVacancies;
      'elements.testing': ElementsTesting;
      'elements.testimonial': ElementsTestimonial;
      'elements.test': ElementsTest;
      'elements.statistic': ElementsStatistic;
      'elements.some-thing': ElementsSomeThing;
      'elements.service': ElementsService;
      'elements.post-preview-item': ElementsPostPreviewItem;
      'elements.plan': ElementsPlan;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.news-post': ElementsNewsPost;
      'elements.locales': ElementsLocales;
      'elements.lead-forms': ElementsLeadForms;
      'elements.hero-large': ElementsHeroLarge;
      'elements.form-fields': ElementsFormFields;
      'elements.footer-section': ElementsFooterSection;
      'elements.feedback': ElementsFeedback;
      'elements.employee': ElementsEmployee;
      'elements.department': ElementsDepartment;
      'elements.compy-to-contact': ElementsCompyToContact;
      'elements.client': ElementsClient;
      'elements.carousel-media': ElementsCarouselMedia;
      'meta.metadata': MetaMetadata;
      'links.social-link': LinksSocialLink;
      'links.link': LinksLink;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'layout.navbar': LayoutNavbar;
      'layout.logo': LayoutLogo;
      'layout.footer': LayoutFooter;
    }
  }
}
