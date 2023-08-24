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
import EnergyLabTemplate from "./preview-templates/EnergyLabPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("startHere", StartPagePreview);
CMS.registerPreviewTemplate("r2r", R2RPagePreview);
// use the EL template because its basic
CMS.registerPreviewTemplate("energylab", EnergyLabTemplate);
CMS.registerPreviewTemplate("swimcoaching", EnergyLabTemplate);
CMS.registerPreviewTemplate("tricoaching", EnergyLabTemplate);

CMS.registerPreviewTemplate("membership", MembershipPagePreview);
CMS.registerPreviewTemplate("sponsors", SponsorsPagePreview);
CMS.registerPreviewTemplate("event-sponsors", SponsorsPagePreview);
CMS.registerPreviewTemplate("features", BlogPostPreview);
CMS.registerPreviewTemplate("testimonials", BlogPostPreview);
CMS.registerPreviewTemplate("training-locations", TrainingLocationsPagePreview);
// Coaches Tempaltes
CMS.registerPreviewTemplate("atc-coaches", ATCCoachesPagePreview);
CMS.registerPreviewTemplate("triathlon-coaches", ATCCoachesPagePreview);
CMS.registerPreviewTemplate("swim-coaches", ATCCoachesPagePreview);
CMS.registerPreviewTemplate("atc-sponsors", ATCCoachesPagePreview);
CMS.registerPreviewTemplate("energy-lab-sponsors", ATCCoachesPagePreview);
