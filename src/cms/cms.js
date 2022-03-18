import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import StartPagePreview from "./preview-templates/startPagePreview";
import MembershipPagePreview from "./preview-templates/membershipPagePreview";
import SponsorsPagePreview from "./preview-templates/SponsorsPagePreview";
import ATCCoachesPagePreview from "./preview-templates/ATCCoachesPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("startHere", StartPagePreview);
CMS.registerPreviewTemplate("membership", MembershipPagePreview);
CMS.registerPreviewTemplate("sponsors", SponsorsPagePreview);
CMS.registerPreviewTemplate("features", BlogPostPreview);
CMS.registerPreviewTemplate("testimonials", BlogPostPreview);
// Coaches Tempaltes
CMS.registerPreviewTemplate("atc-coaches", ATCCoachesPagePreview);
