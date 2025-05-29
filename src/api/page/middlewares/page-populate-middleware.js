"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      video: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      poster: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      image: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      file: {
        fields: ["url"],
      },
      logo: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      mobLogo: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      media: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      thumbnail: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      googleIcon: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      wazeIcon: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      buttons: {
        populate: true,
      },
      fontColor: {
        populate: true,
      },
      formFields: {
        populate: true,
      },
      vacancies: {
        populate: true,
      },
      companyToContact: {
        populate: true,
      },
      post: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      company: {
        populate: {
          fields: true,
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      Department: {
        populate: {
          fields: true,
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      feature: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      imageCarousel: {
        populate: {
          fields: ["url"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
          thumbnail: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      newsPost: {
        populate: {
          fields: ["url", "title", "description", "buttonTitle"],
          thumbnail: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      services: {
        populate: true,
      },
      statistic: {
        populate: true,
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      plans: {
        populate: ["product_features"],
      },
      submitButton: {
        populate: true,
      },
      emailsettings: {
        populate: {
          fields: ["host", "password", "email"],
        },
      },
      Image: {
        populate: true,
      },
      Field: { populate: true },
      Header: { populate: ["Image", "Title"] },
      "sign-up-form": {
        populate: {
          Recipient: true,
          Header: { populate: true },
        },
      },
      Subject: {
        populate: true,
      },
      ButtonTitle: {
        populate: true,
      },
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
