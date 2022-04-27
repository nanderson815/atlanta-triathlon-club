import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import StartPagePreview from "./preview-templates/startPagePreview";
import MembershipPagePreview from "./preview-templates/membershipPagePreview";
import TrainingLocationsPagePreview from "./preview-templates/TrainingLocationsPreview";
import SponsorsPagePreview from "./preview-templates/SponsorsPagePreview";
import ATCCoachesPagePreview from "./preview-templates/ATCCoachesPagePreview";
import R2RPagePreview from "./preview-templates/r2rPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("startHere", StartPagePreview);
CMS.registerPreviewTemplate("r2r", R2RPagePreview);
CMS.registerPreviewTemplate("membership", MembershipPagePreview);
CMS.registerPreviewTemplate("sponsors", SponsorsPagePreview);
CMS.registerPreviewTemplate("features", BlogPostPreview);
CMS.registerPreviewTemplate("testimonials", BlogPostPreview);
CMS.registerPreviewTemplate("training-locations", TrainingLocationsPagePreview);
// Coaches Tempaltes
CMS.registerPreviewTemplate("atc-coaches", ATCCoachesPagePreview);
CMS.registerPreviewTemplate("triathlon-coaches", ATCCoachesPagePreview);
