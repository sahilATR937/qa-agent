# Pocial Project Knowledge Base

Source: Sprintle "Pocial" project issue export (186 issues read, keys POCI-1 through POCI-189, with POCI-10, POCI-118, POCI-132 absent from the export). No issue in the export had a populated `description` field — every issue's content lives in its `summary` field only, so summaries are quoted verbatim throughout this document in place of descriptions.

## 1. Overview

Pocial (tested at stage.pocial.com) is a social-media content creation, editing, and scheduling web app with a companion mobile experience. Its core workflow lets a user pick or upload media (direct upload, "My Gallery," Google Drive, Dropbox, or the Pixlee UGC library), edit it in an in-app image/video editor (crop, filters/adjust, text, stickers, layers, trim), choose which platforms to post to (Instagram, Facebook, LinkedIn, TikTok, and in some flows Google Business Profile), preview the post per-platform, and then either publish or schedule it. Distinct creation surfaces exist for single posts ("Post Form" / "Create"), rapid multi-image/video posting ("Quick Create"), and ephemeral "Story" posts. The product also has a Social Media/Campaign Library for browsing prior content, a Social Stats module, Stripe-based payments, a ClubReady fitness-CRM integration (members/visits/scheduling data), Google Drive OAuth asset browsing, and a large AI-feature roadmap (RAG-based "Edit with AI," image/video generation, sentiment analysis, autopilot, etc.) tracked as long-term backlog tasks.

## 2. Feature areas / modules

**Post Form & social platform preview** (single-post creation, per-platform preview correctness)
- POCI-186 Spacing Issues: Screens don't match Figma spacing/padding/alignment — Ready for QA
- POCI-181 Post Form – 4/5 Images: Preview button layout/spacing breaks — Ready for Pocial testing
- POCI-179 Preview Button Size: Shrinks after selecting 4–5 images — Ready for Pocial testing
- POCI-178 Multiple Image Preview: 1 of 4 images missing from preview — Ready for Pocial testing
- POCI-176 Post Form Social Media Selection: Only TikTok auto-enabled for Pixlee images — Ready for Pocial testing
- POCI-175 Post Preview Zoom: Images appear zoomed out; IG/FB previews identical — Re-Open
- POCI-174 Post Form – Social Media: LinkedIn not auto-enabled for Pixlee images — Re-Open
- POCI-171 Gallery Image Selection: LinkedIn icon missing under "Where Will You Post?" — Re-Open
- POCI-169 Instagram & TikTok Frame: Frame, edit button, and spacing issues — Ready for Pocial testing
- POCI-158 "Where will this post?" user flow needs redesign; "Apply All" platform toggle has bugs (Web) — Ready for Pocial testing
- POCI-142 Separate social media platform selection screen after Edit should be removed as per Figma flow — Ready for Pocial testing
- POCI-141 "Where it will post" section missing content/options present in Figma — Ready for Pocial testing
- POCI-138 Instagram header text, font, and styling do not match Figma design — Ready for Pocial testing
- POCI-134 Instagram and Facebook not selected by default in platform selection — Ready for Pocial testing
- POCI-133 Improper spacing between Close (X) icon and "Where it will post" section — Ready for Pocial testing
- POCI-121 2 images with all platforms enabled: some platforms show only 1 image instead of both — Done
- POCI-120 Preview shows only last image when different "Where to Post" platforms set per image (4 images) — Done
- POCI-116 Only one card created after uploading multiple images instead of separate cards per selected platform — Done
- POCI-105 Facebook and TikTok toggles auto-disable after enabling all "Where to Post" toggles for re-uploaded My Gallery images — Done
- POCI-91 LinkedIn Logo Is Misaligned in Social Media Selector — Done
- POCI-90 "Apply to All Images" Action Is Not Clear to Users — Done
- POCI-89 Feedback: Instagram Image Touches/Overlaps Upper Section on Mobile — Done
- POCI-86 Canvas Size Is Not Changing According to Social Media Platform — Done
- POCI-85 Social Media Toggle Dropdown Does Not Close on Outside Click — Done

**Quick Create / media upload flow**
- POCI-188 Quick Create - LinkedIn Is Missing From Our Platforms to Toggle On — To Do
- POCI-187 Mobile Image Upload: Preview/upload flow fails for direct image uploads (non-Drive, non-Pixlee) — Ready for QA
- POCI-168 Image Size - FB & LI are stuck unable to Zoom Out (Web & Mobile) — To Do
- POCI-167 Image Editor -- Image disappears when Instagram is toggled off in Quick Create — Re-Open
- POCI-165 Misleading upload progress message - no completion alert, requires clicking "Generate" again — Re-Open
- POCI-149 Edit button icon not formatted properly under first step of Image upload in Quick Create form — Ready for prod deployment
- POCI-148 Google Drive imported image loads in half canvas, becomes full canvas only after zoom-in in Quick Create — Ready for Pocial testing
- POCI-147 Incorrect next-image thumbnail and missing platform-toggle option popup for videos in Quick Create mixed content flow — Ready for Pocial testing
- POCI-145 Unable to add 2 videos from Quick Create - same error as before — Ready for Pocial testing
- POCI-143 Multiple selected images shown as small thumbnails instead of full-screen carousel preview — Ready for Pocial testing
- POCI-124 Quick Create > Social Media Post Generator box has same issues as Create flow — Done
- POCI-117 Video preview appears black/blinking on upload screen when uploading 3 images and 1 video together — Done
- POCI-115 Only one image preview displayed when uploading multiple images from Google Drive — Done
- POCI-114 All file types shown by default during image upload instead of filtering to only image/photo files — Done
- POCI-113 Next button missing (only Download shown) after selecting images from My Gallery on Content Library page — Done
- POCI-112 Multiple image selection does not work when uploading images on the Content Library page — Done
- POCI-111 Upload page does not show per-platform count of created/edited images for multiple Google Drive images — Done
- POCI-110 Upload page shows nothing after editing and clicking "Save & Next" for multiple images selected from My Gallery — Done
- POCI-109 "Where to Post" option not visible on editor screen when selecting 34 images from My Gallery — Done
- POCI-108 Only one image shown in editor when clicking Edit from preview screen with multiple uploaded images — Done
- POCI-107 Image uploaded from Google Drive cannot be edited when clicking Edit — Done
- POCI-106 Clicking Cross (X) in editor discards the last edited image instead of keeping prior edits — Done
- POCI-104 Image size increases after editing all images from a single upload, causing "Something went wrong" error on save/upload — Done
- POCI-102 Multiple image selection is not available on UAT2 — Done
- POCI-101 Unnecessary "Learn More" flow is shown before image upload — Done
- POCI-100 File size limit validation is displayed after upload modal closes — Done

**Story**
- POCI-184 Story Image Selection: Only single-image allowed, inconsistent with internal flow — Ready for Pocial testing
- POCI-183 Story Close/Cross Icon: Design differs from provided design — Ready for Pocial testing
- POCI-173 Story – Pixlee Selection: Enabled social icons not shown by default — Re-Open
- POCI-172 Story Edit Button: Spacing issue around Edit button — Ready for Pocial testing
- POCI-144 Trim option missing when adding another video from preview after uploading a video in Story — Ready for Pocial testing

**Image editor (crop/adjust/text/layers/trim tools)**
- POCI-185 Multiple Image Trim: Video trimming fails with multiple images selected — Re-Open
- POCI-166 Image Editor - Social Post Creation issue for Facebook, LinkedIn and Tiktok — Ready for Pocial testing
- POCI-164 Video trim doesn't persist - reverts to full uploaded length after caption loads — Re-Open
- POCI-163 Long videos show "file too big" error but still allow trimming, auto-crop to 1 min is invalid, and it gets stuck loading — To Be Deployed
- POCI-162 Mobile: QR code back button exits editor entirely; checkmark/done button non-functional — Ready for Pocial testing
- POCI-161 Mobile: Stickers/GIFs/photos are hard to resize individually and shift position randomly on save — Ready for Pocial testing
- POCI-160 Mobile: Outline is not a true outline and its color, along with Background color, has the same picker issue — Ready for Pocial testing
- POCI-159 Mobile: Custom text color picker - Hue turns black unless Value/Saturation moved fully right — To Do
- POCI-157 Rename "Filter" to "Adjust" since it edits the image rather than applying filters — Ready for prod deployment
- POCI-156 Layers cannot be manually dragged - only reorderable via Up/Down buttons — Ready for prod deployment
- POCI-155 Remove confusing font weight options (400/700, Bold, Regular, Italic) — Ready for prod deployment
- POCI-154 Text box not dynamic - background size mismatches font size — Ready for Pocial testing
- POCI-153 Font color and background color changes don't reflect live while selecting - only visible after clicking out — To Be Deployed
- POCI-152 Crop area becomes long/narrow (old UI) when adding a photo to convert a single photo post into a carousel — To Be Deployed
- POCI-151 Limit hashtags to a maximum of 5 — Ready for Pocial testing
- POCI-150 Carousel platform toggle repeats per photo instead of applying once to the whole carousel; missing platform image-limit info — To Be Deployed
- POCI-140 Edit tool sidebar options and image overlays do not match Figma for all 5-6 edit tools — Ready for Pocial testing
- POCI-139 Edit icons are significantly larger than Figma specifications — Ready for QA
- POCI-137 Back (<--) icon shown instead of Close (X) icon after clicking Edit and moving to next page — Ready for Pocial testing
- POCI-136 Rotate, Zoom In, and Zoom Out controls not positioned as per Figma — Re-Open
- POCI-135 Edit icon and accompanying text do not match Figma design — Ready for Pocial testing
- POCI-96 Image Editor - Our queries — Done (Story)
- POCI-95 Feedback: Trim Video Flow Returns to the Same Screen After Clicking Done — Done
- POCI-94 Floating Navigation Blocks Generate/Create Post Button During Video Publishing — Done
- POCI-93 Text/Element Move Controls Do Not Respond Correctly — Done
- POCI-92 Mobile Keyboard Does Not Open When Adding Text — Done
- POCI-88 Gap Appears Between Footer Tool Selection and Bottom Modal on Mobile — Done
- POCI-87 Extra Footer Spacing on Mobile Image Editor — Done
- POCI-84 Enhance Video trim functionality — Done (Story)
- POCI-83 Image Editor - New enhancements — Done (Story)
- POCI-4 UX simplification pass (Instagram benchmark) — Done
- POCI-3 GIF → MP4 conversion on composed asset before publish — Done
- POCI-2 Design tab on crop canvas (design-before-generation flow) — Done
- POCI-1 Image Editor Enhancements — Done (Story)

**Gallery / Pixlee selection & multi-image handling (mobile-heavy)**
- POCI-182 Pixlee Multi-Select: Multi-select functionality not available — Ready for Pocial testing
- POCI-128 Page refreshes when editing already-selected images (mobile) — Ready for QA [crash]
- POCI-127 Page sometimes refreshes after ~4 images selected when choosing 5-6 images (mobile) — In Progress [crash]
- POCI-126 Selected-images count card overlaps and blocks image view when selecting 4-5 images (mobile) — Done
- POCI-125 Google Drive preview appears too large on mobile — Done
- POCI-123 "Create Image" option missing from Social Media Library page on mobile — Done
- POCI-122 Multiple image selection from Google Drive not working on mobile — Done
- POCI-119 Mobile: Clicking Next after selecting a gallery photo re-triggers the same issue — Done
- POCI-99 Google Drive image previews are not displayed for users who were already connected after a new code deployment — Done
- POCI-98 Google Drive connection shows "Unsafe Pocial" warning before allowing access — In Progress
- POCI-97 Google Drive Picker allows multiple image selection instead of single-select on Media Gallery Social Post screen — Done

**Campaign / Social Media / Content Library**
- POCI-189 Campaign Library - I Get An Error Message When Trying to View My Content — To Do
- POCI-129 [Responsive] Unspecified console error object logged on homepage across multiple viewports — In Progress
- POCI-130 [Responsive] Clickable element overlaps "Sign Up" button on homepage across most viewports — In Progress
- POCI-131 [UAT2][Responsive] Uncaught JavaScript error thrown on homepage at mobile viewports — In Progress

**Payments / internal ops / security**
- POCI-82 Stripe Payment Integration Rectifcations — In Progress
- POCI-81 Social stats Module Rectifications — Ready for Pocial testing
- POCI-55 Stripe Integration Fix — To Do [BUILT, BRITTLE]
- POCI-23 Pocial Internal: Two-factor Authentication — In Testing
- POCI-22 Pocial Internal: Data Vault Clean up — Ready for QA
- POCI-16 Security API — access token create / refresh / cache — In Progress
- POCI-21 Stabilise scraper / crawler (prevent silent mid-run failure) — Done
- POCI-20 Combined regression testing — 3 new accounts end-to-end — Done
- POCI-19 Fix content generation completion (remove manual re-trigger) — Done
- POCI-18 Fix Competitor Analysis frozen / stuck state — Done
- POCI-17 Onboarding Process Reliability — Done (Story)

**ClubReady / CRM integration**
- POCI-11 ClubReady API Integration — Phase 1 — In Progress (Story)
- POCI-15 Email export to Klaviyo / Mailchimp + campaign trigger — In Progress
- POCI-14 Visits V1 — 30d/90d records + lead-type scoring engine — In Progress
- POCI-13 Scheduling V1 — class schedule + hours of operation ingestion — In Progress
- POCI-12 User V1/V2 — import members + prospects (all club IDs) — In Progress
- POCI-25 Pocial Integration: GBP posting reviews and Insights — To Do

**AI / RAG and roadmap features (largely backlog, not yet tested)**
- POCI-9 AI "Edit with AI" Generates Incorrect Response — Done (Story)
- POCI-26 Pocial AI: Replace Delta Engine with RAG — Done
- POCI-24 Pocial Internal: Edit with AI Doesn't use the original send Package — To Do
- POCI-80 Agentic Autopilot Mode — To Do
- POCI-79 Sentiment Analysis on Post Comments — To Do
- POCI-78 AI Content Repurposing — To Do
- POCI-77 Predictive Content Performance Scoring — To Do
- POCI-76 AI Video Generation (Runway / Kling / FFmpeg) — To Do
- POCI-75 Custom AI Prompts Based on Industry — To Do
- POCI-74 Integrate DALL·E 3 / Imagen 3 Image Generation — To Do
- POCI-73 Brand Compliance Scoring — To Do
- POCI-72 Prompt Template Management UI — To Do
- POCI-71 Full Maintenance of AI Results — To Do
- POCI-70 Group Create All Content — To Do

**Google Drive / Dropbox asset repository**
- POCI-177 GDrive Preview: Image preview not working for Google Drive images — In Progress
- POCI-5 Google Drive Asset Repository — Done (Story)
- POCI-8 Insert selected asset into content creation flow — Done
- POCI-7 OAuth 2.0 connect flow (mirror Dropbox pattern) — Done
- POCI-6 Browse / list Drive files & folders in content UI — Done

**Third-party/channel integration backlog** (WordPress, Pinterest, Reddit, SEMrush, Google Trading Desk, paid ads, Apple Business Connect, WhatsApp Business API, FFM API, Social Stats Data Capture, email integrations, YouTube)
- POCI-68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57 — all To Do, roadmap items, not yet in active test scope

**Internal platform/engineering roadmap** (not directly QA-relevant but explains upcoming surface area)
- POCI-56/32 OpenTelemetry Observability, POCI-54 Email Deliverability Tools, POCI-53 Best Time to Post, POCI-52 AI Monthly Performance Reports, POCI-51 Competitor Real-Time Monitoring Alerts, POCI-50 Real-Time Analytics Dashboard, POCI-49 Member UGC Reward Incentives, POCI-48 Snap2Share Mobile App, POCI-47 Homepage Maintenance, POCI-46 Lead Form into Website, POCI-45 Poll Integration into Websites, POCI-44 Email Drip Campaigns, POCI-43 Belvedere Proactive Assistant, POCI-42 Zapier/Make.com Webhook Integration, POCI-41 UGC AI Moderation, POCI-40 White-Label/Public API, POCI-39 RBAC Enhancement, POCI-38 Separate Notification Email for Linked Enterprise Accounts, POCI-37 Content Lanes, POCI-36 Franchise/Multi-Location Dashboard, POCI-35 Text-to-Upload UGC Capture, POCI-34 Schedule All Content, POCI-33 Create/Schedule Blogs at Enterprise Level, POCI-31 tRPC/Typed API Layer, POCI-30 Decompose Monolithic utility.js, POCI-29 TypeScript Migration (Backend), POCI-28 Full MongoDB and Code Management, POCI-27 Unit Testing/Coding Standards/DB Documentation — all To Do

## 3. Recurring bug patterns

**1. Multi-image / carousel handling breaks down as image count grows (4–6 images)**
Consistently, features that work fine for 1 image fail once several images are selected together. This is the single most common root cause across the dataset.
- POCI-181, POCI-179, POCI-178 (preview button breaks/shrinks/drops images at 4–5 images)
- POCI-128, POCI-127, POCI-126 (mobile page refresh/crash and overlapping UI at 4–6 images)
- POCI-121, POCI-120 (per-image platform settings collide — only last image or subset shown)
- POCI-116 (one card created instead of one per platform when multiple images uploaded)
- POCI-115, POCI-111 (Google Drive multi-image preview/count broken)
- POCI-112, POCI-122 (multi-select simply doesn't work on Content Library / Google Drive on some surfaces)
- POCI-109, POCI-110, POCI-108 (editor/"Where to Post" only shows/edits one image out of many selected)
- POCI-185 (video trim fails specifically when multiple images are selected)
- POCI-143 (multi-image shown as thumbnails instead of full-screen carousel)
→ Test cases should always include boundary counts: 1, 2, 4, 5, 6+ images/videos mixed, per-image vs. apply-to-all settings.

**2. Platform toggle / "Where will you post?" state bugs — auto-enable, auto-disable, and inconsistent defaults across IG/FB/LinkedIn/TikTok**
- POCI-188 (LinkedIn missing entirely from Quick Create platform toggles)
- POCI-176, POCI-174 (Pixlee images only auto-enable TikTok, not LinkedIn)
- POCI-173 (Story: enabled social icons not shown by default)
- POCI-171 (LinkedIn icon missing under "Where Will You Post?" for gallery images)
- POCI-167 (image disappears entirely when Instagram is toggled off)
- POCI-134 (Instagram and Facebook not selected by default)
- POCI-105 (Facebook/TikTok toggles silently auto-disable after enabling all toggles)
- POCI-158 ("Apply All" platform toggle has bugs, whole flow flagged for redesign)
- POCI-150 (carousel platform toggle repeats per-photo instead of applying once)
→ Every platform-toggle bug is a variant of "toggle state doesn't match expectation after some sequence of actions" — worth a dedicated state-machine test matrix per platform × per entry point (Post Form, Quick Create, Story, Gallery, Pixlee).

**3. IG vs. FB (vs. other platform) preview inconsistency / zoom-crop mismatch**
- POCI-175 (images appear zoomed out; IG and FB previews render identically when they shouldn't)
- POCI-168 (FB & LinkedIn image size stuck, unable to zoom out, web & mobile)
- POCI-166 (Image Editor social-post-creation issue specifically for Facebook, LinkedIn, TikTok)
- POCI-152 (crop area becomes long/narrow — old UI — when converting single photo to carousel)
- POCI-86 (canvas size not changing according to social media platform)
→ Suggests the per-platform aspect-ratio/canvas-sizing logic is fragile whenever the post type or image count changes after initial load.

**4. Figma/spec mismatch — spacing, icon size, icon choice, and control placement**
A very large share of "Ready for Pocial testing" bugs are pure visual-QA findings against Figma, not functional breaks:
- POCI-186 (general spacing/padding/alignment mismatch)
- POCI-183 (Story close icon design differs from spec)
- POCI-172, POCI-170, POCI-133 (spacing issues around edit button / icons / close icon)
- POCI-169 (IG & TikTok frame, edit button, spacing issues)
- POCI-140 (edit tool sidebar/overlays don't match Figma for 5-6 tools)
- POCI-139 (edit icons significantly larger than spec)
- POCI-138 (Instagram header text/font/styling mismatch)
- POCI-137 (wrong icon — back arrow instead of close X — shown after Edit)
- POCI-136 (rotate/zoom controls mis-positioned)
- POCI-135 (edit icon + text mismatch)
- POCI-149 (edit button icon not formatted properly)
→ These recur so often they suggest visual regression testing / design-diffing against Figma should be a standing part of every UI-touching release, not a one-off pass.

**5. Video trim/upload state doesn't persist or validate correctly**
- POCI-185 (trim fails with multiple images)
- POCI-164 (trim doesn't persist — reverts to full length after caption loads)
- POCI-163 (long video shows "file too big" but still allows trimming; auto-crop to 1 min invalid; gets stuck loading)
- POCI-95 (trim video flow returns to the same screen after clicking Done instead of advancing)
- POCI-144 (trim option missing when adding another video from preview, in Story)
- POCI-146 (video keeps playing in background after moving to another slide in preview popup)
- POCI-145 (unable to add 2 videos from Quick Create)
- POCI-117 (video preview black/blinking when mixed with images)
→ Video is clearly a weaker-tested code path than images; any release touching video should re-test trim persistence, size validation, and multi-video scenarios specifically.

**6. Mobile-specific bugs (distinct from responsive/visual issues) — crashes, keyboard, pickers, gestures**
- POCI-128, POCI-127 (page refresh/crash on mobile multi-image selection)
- POCI-162 (mobile QR-code back button exits editor; done button non-functional)
- POCI-161 (stickers/GIFs/photos hard to resize individually, shift randomly on save)
- POCI-160 (outline isn't a true outline; color picker issue shared with background color)
- POCI-159 (custom text color picker: hue turns black unless value/saturation moved fully right)
- POCI-92 (mobile keyboard doesn't open when adding text)
- POCI-125 (Google Drive preview too large on mobile)
- POCI-123 (missing "Create Image" option on mobile library page)
- POCI-122 (multi-select from Google Drive doesn't work on mobile)
- POCI-119 (Next button re-triggers same issue after gallery photo selection)
- POCI-89, POCI-88, POCI-87 (mobile-only spacing/overlap issues in editor)
→ Any test plan should explicitly branch web vs. mobile for editor, picker, and multi-select flows — mobile has a disproportionate share of crash-class bugs (POCI-127/128 are "Highest" priority) versus web's mostly-cosmetic issues.

**7. Third-party integration fragility (Google Drive / Stripe) surfacing as trust/availability issues**
- POCI-98 ("Unsafe Pocial" warning shown by Google before allowing Drive access)
- POCI-99 (Drive previews stop working for already-connected users after a deployment)
- POCI-107 (Drive-imported image can't be edited)
- POCI-148 (Drive image loads in half canvas until zoomed)
- POCI-55 (Stripe integration explicitly labeled BUILT but BRITTLE in backlog)
- POCI-82 (Stripe payment integration rectifications ongoing)
→ Regression testing after any deployment should specifically re-verify already-connected Google Drive accounts and Stripe payment flows, since both have shown deployment-triggered regressions.

**8. Responsive/homepage viewport errors (marketing site, not the app itself)**
- POCI-129 (unspecified console error across viewports)
- POCI-130 (clickable element overlaps Sign Up button across most viewports)
- POCI-131 (uncaught JS error at mobile viewports, UAT2)
→ Smaller cluster but worth a dedicated cross-viewport smoke pass on the homepage before releases.

## 4. Status breakdown

| Status | Count |
|---|---|
| Done | 74 |
| Ready for Pocial testing | 34 |
| To Do | 43 |
| In Progress | 12 |
| Re-Open | 8 |
| To Be Deployed | 4 |
| Ready for prod deployment | 5 |
| Ready for QA | 4 |
| In Testing | 1 |
| (Total) | 186 |

(Counts derived from the `status` field of every issue read; "To Do" is dominated by the long-tail AI/Integrations/Internal roadmap backlog items POCI-27 through POCI-80, most of which are Task-type feature requests rather than bugs.)

## 5. Full ticket index (sorted by key, descending)

| Key | Summary | Status | Type | Priority |
|---|---|---|---|---|
| POCI-189 | Campaign Library - I Get An Error Message When Trying to View My Content | To Do | Story | Highest |
| POCI-188 | Quick Create - LinkedIn Is Missing From Our Platforms to Toggle On | To Do | Story | Highest |
| POCI-187 | Mobile Image Upload: Preview/upload flow fails for direct image uploads (non-Drive, non-Pixlee) | Ready for QA | Bug | High |
| POCI-186 | Spacing Issues: Screens don't match Figma spacing/padding/alignment | Ready for QA | Bug | Medium |
| POCI-185 | Multiple Image Trim: Video trimming fails with multiple images selected | Re-Open | Bug | Medium |
| POCI-184 | Story Image Selection: Only single-image allowed, inconsistent with internal flow | Ready for Pocial testing | Bug | Medium |
| POCI-183 | Story Close/Cross Icon: Design differs from provided design | Ready for Pocial testing | Bug | Medium |
| POCI-182 | Pixlee Multi-Select: Multi-select functionality not available | Ready for Pocial testing | Bug | Medium |
| POCI-181 | Post Form – 4/5 Images: Preview button layout/spacing breaks | Ready for Pocial testing | Bug | Medium |
| POCI-180 | Edit Screen Toggle: ON/OFF toggle causes image to appear white | Ready for Pocial testing | Bug | Medium |
| POCI-179 | Preview Button Size: Shrinks after selecting 4–5 images | Ready for Pocial testing | Bug | Medium |
| POCI-178 | Multiple Image Preview: 1 of 4 images missing from preview | Ready for Pocial testing | Bug | Medium |
| POCI-177 | GDrive Preview: Image preview not working for Google Drive images | In Progress | Bug | Medium |
| POCI-176 | Post Form Social Media Selection: Only TikTok auto-enabled for Pixlee images | Ready for Pocial testing | Bug | Medium |
| POCI-175 | Post Preview Zoom: Images appear zoomed out; IG/FB previews identical | Re-Open | Bug | Medium |
| POCI-174 | Post Form – Social Media: LinkedIn not auto-enabled for Pixlee images | Re-Open | Bug | Medium |
| POCI-173 | Story – Pixlee Selection: Enabled social icons not shown by default | Re-Open | Bug | Medium |
| POCI-172 | Story Edit Button: Spacing issue around Edit button | Ready for Pocial testing | Bug | Medium |
| POCI-171 | Gallery Image Selection: LinkedIn icon missing under "Where Will You Post?" | Re-Open | Bug | Medium |
| POCI-170 | Edit Screen Spacing: Extra spacing around icons while editing | Ready for Pocial testing | Bug | Medium |
| POCI-169 | Instagram & TikTok Frame: Frame, edit button, and spacing issues | Ready for Pocial testing | Bug | Medium |
| POCI-168 | Image Size - FB & LI are stuck unable to Zoom Out (Web & Mobile) | To Do | Story | Medium |
| POCI-167 | Image Editor -- Image disappears when Instagram is toggled off in Quick Create | Re-Open | Bug | Medium |
| POCI-166 | Image Editor - Social Post Creation issue for Facebook, LinkedIn and Tiktok | Ready for Pocial testing | Bug | Medium |
| POCI-165 | Misleading upload progress message - no completion alert, requires clicking "Generate" again (Web + Mobile) | Re-Open | Bug | Medium |
| POCI-164 | Video trim doesn't persist - reverts to full uploaded length after caption loads (Web + Mobile) | Re-Open | Bug | Medium |
| POCI-163 | Long videos show "file too big" error but still allow trimming, auto-crop to 1 min is invalid, and it gets stuck loading (Web + Mobile) | To Be Deployed | Bug | Medium |
| POCI-162 | Mobile: QR code back button exits editor entirely; checkmark/done button non-functional (Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-161 | Mobile: Stickers/GIFs/photos are hard to resize individually and shift position randomly on save (Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-160 | Mobile: Outline is not a true outline and its color, along with Background color, has the same picker issue (Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-159 | Mobile: Custom text color picker - Hue turns black unless Value/Saturation moved fully right (Mobile) | To Do | Bug | Medium |
| POCI-158 | "Where will this post?" user flow needs redesign; "Apply All" platform toggle has bugs (Web) | Ready for Pocial testing | Bug | Medium |
| POCI-157 | Rename "Filter" to "Adjust" since it edits the image rather than applying filters (Web + Mobile) | Ready for prod deployment | Bug | Medium |
| POCI-156 | Layers cannot be manually dragged - only reorderable via Up/Down buttons (Web + Mobile) | Ready for prod deployment | Bug | Medium |
| POCI-155 | Remove confusing font weight options (400/700, Bold, Regular, Italic) (Web) | Ready for prod deployment | Bug | Medium |
| POCI-154 | Text box not dynamic - background size mismatches font size (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-153 | Font color and background color changes don't reflect live while selecting - only visible after clicking out (Web + Mobile) | To Be Deployed | Bug | Medium |
| POCI-152 | Crop area becomes long/narrow (old UI) when adding a photo to convert a single photo post into a carousel (Web + Mobile) | To Be Deployed | Bug | Medium |
| POCI-151 | Limit hashtags to a maximum of 5 (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-150 | Carousel platform toggle repeats per photo instead of applying once to the whole carousel; missing platform image-limit info (Web + Mobile) | To Be Deployed | Bug | Medium |
| POCI-149 | Edit button icon not formatted properly under first step of Image upload in Quick Create form (Web + Mobile) | Ready for prod deployment | Bug | Medium |
| POCI-148 | Google Drive imported image loads in half canvas, becomes full canvas only after zoom-in in Quick Create (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-147 | Incorrect next-image thumbnail and missing platform-toggle option popup for videos in Quick Create mixed content flow (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-146 | Video keeps playing in background after moving to another slide in Social Post preview popup (Web + Mobile) | Ready for prod deployment | Bug | Medium |
| POCI-145 | Unable to add 2 videos from Quick Create - same error as before (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-144 | Trim option missing when adding another video from preview after uploading a video in Story (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-143 | Multiple selected images shown as small thumbnails instead of full-screen carousel preview (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-142 | Separate social media platform selection screen after Edit should be removed as per Figma flow (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-141 | "Where it will post" section missing content/options present in Figma (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-140 | Edit tool sidebar options and image overlays do not match Figma for all 5-6 edit tools (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-139 | Edit icons are significantly larger than Figma specifications (Web + Mobile) | Ready for QA | Bug | Medium |
| POCI-138 | Instagram header text, font, and styling do not match Figma design (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-137 | Back (<--) icon shown instead of Close (X) icon after clicking Edit and moving to next page (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-136 | Rotate, Zoom In, and Zoom Out controls not positioned as per Figma (Web + Mobile) | Re-Open | Bug | Medium |
| POCI-135 | Edit icon and accompanying text do not match Figma design (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-134 | Instagram and Facebook not selected by default in platform selection (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-133 | Improper spacing between Close (X) icon and "Where it will post" section (Web + Mobile) | Ready for Pocial testing | Bug | Medium |
| POCI-131 | [UAT2] [Responsive] Uncaught JavaScript error thrown on homepage at mobile viewports | In Progress | Bug | High |
| POCI-130 | [Responsive] Clickable element overlaps "Sign Up" button on homepage across most viewports | In Progress | Bug | Medium |
| POCI-129 | [Responsive] Unspecified console error object logged on homepage across multiple viewports | In Progress | Bug | Medium |
| POCI-128 | Page refreshes when editing already-selected images (mobile) | Ready for QA | Bug | Highest |
| POCI-127 | Page sometimes refreshes after ~4 images selected when choosing 5-6 images (mobile) | In Progress | Bug | Highest |
| POCI-126 | Selected-images count card overlaps and blocks image view when selecting 4-5 images (mobile) | Done | Bug | Medium |
| POCI-125 | Google Drive preview appears too large on mobile | Done | Bug | Medium |
| POCI-124 | Quick Create > Social Media Post Generator box has same issues as Create flow | Done | Bug | High |
| POCI-123 | "Create Image" option missing from Social Media Library page on mobile | Done | Bug | High |
| POCI-122 | Multiple image selection from Google Drive not working on mobile | Done | Bug | Highest |
| POCI-121 | 2 images with all platforms enabled: some platforms show only 1 image instead of both | Done | Bug | Highest |
| POCI-120 | Preview shows only last image when different "Where to Post" platforms set per image (4 images) | Done | Bug | Highest |
| POCI-119 | Mobile: Clicking Next after selecting a gallery photo re-triggers the same issue | Done | Bug | High |
| POCI-117 | Video preview appears black/blinking on upload screen when uploading 3 images and 1 video together | Done | Bug | Medium |
| POCI-116 | Only one card created after uploading multiple images instead of separate cards per selected platform | Done | Bug | Medium |
| POCI-115 | Only one image preview displayed when uploading multiple images from Google Drive | Done | Bug | Medium |
| POCI-114 | All file types shown by default during image upload instead of filtering to only image/photo files | Done | Bug | Medium |
| POCI-113 | Next button missing (only Download shown) after selecting images from My Gallery on Content Library page | Done | Bug | Medium |
| POCI-112 | Multiple image selection does not work when uploading images on the Content Library page | Done | Bug | Medium |
| POCI-111 | Upload page does not show per-platform count of created/edited images for multiple Google Drive images | Done | Bug | Medium |
| POCI-110 | Upload page shows nothing after editing and clicking "Save & Next" for multiple images selected from My Gallery | Done | Bug | Medium |
| POCI-109 | "Where to Post" option not visible on editor screen when selecting 34 images from My Gallery | Done | Bug | Medium |
| POCI-108 | Only one image shown in editor when clicking Edit from preview screen with multiple uploaded images | Done | Bug | Medium |
| POCI-107 | Image uploaded from Google Drive cannot be edited when clicking Edit | Done | Bug | Medium |
| POCI-106 | Clicking Cross (X) in editor discards the last edited image instead of keeping prior edits on post image page | Done | Bug | Medium |
| POCI-105 | Facebook and TikTok toggles auto-disable after enabling all "Where to Post" toggles for re-uploaded My Gallery images | Done | Bug | Medium |
| POCI-104 | Image size increases after editing all images from a single upload, causing "Something went wrong" error on save/upload | Done | Bug | Medium |
| POCI-103 | acdsvsvd | Done | Story | Medium |
| POCI-102 | Multiple image selection is not available on UAT2 | Done | Bug | High |
| POCI-101 | Unnecessary "Learn More" flow is shown before image upload | Done | Bug | Medium |
| POCI-100 | File size limit validation is displayed after upload modal closes | Done | Bug | Medium |
| POCI-99 | Google Drive image previews are not displayed for users who were already connected after a new code deployment | Done | Bug | High |
| POCI-98 | Google Drive connection shows "Unsafe Pocial" warning before allowing access | In Progress | Bug | High |
| POCI-97 | Google Drive Picker allows multiple image selection instead of single-select on Media Gallery Social Post screen | Done | Bug | Highest |
| POCI-96 | Image Editor - Our queries | Done | Story | Medium |
| POCI-95 | Feedback: Trim Video Flow Returns to the Same Screen After Clicking Done | Done | Bug | Medium |
| POCI-94 | Floating Navigation Blocks Generate/Create Post Button During Video Publishing | Done | Bug | Medium |
| POCI-93 | Text/Element Move Controls Do Not Respond Correctly | Done | Bug | Medium |
| POCI-92 | Mobile Keyboard Does Not Open When Adding Text | Done | Bug | Medium |
| POCI-91 | LinkedIn Logo Is Misaligned in Social Media Selector | Done | Bug | Medium |
| POCI-90 | "Apply to All Images" Action Is Not Clear to Users | Done | Bug | Medium |
| POCI-89 | Feedback: Instagram Image Touches/Overlaps Upper Section on Mobile | Done | Bug | Medium |
| POCI-88 | Gap Appears Between Footer Tool Selection and Bottom Modal on Mobile | Done | Bug | Medium |
| POCI-87 | Extra Footer Spacing on Mobile Image Editor | Done | Bug | Medium |
| POCI-86 | Canvas Size Is Not Changing According to Social Media Platform | Done | Bug | Medium |
| POCI-85 | Social Media Toggle Dropdown Does Not Close on Outside Click | Done | Bug | Medium |
| POCI-84 | Enhance Video trim functionality | Done | Story | Medium |
| POCI-83 | Image Editor - New enhancements | Done | Story | Medium |
| POCI-82 | Stripe Payment Integration Rectifcations | In Progress | Task | Medium |
| POCI-81 | Social stats Module Rectifications | Ready for Pocial testing | Task | Medium |
| POCI-80 | Agentic Autopilot Mode | To Do | Task | Medium |
| POCI-79 | Sentiment Analysis on Post Comments | To Do | Task | Medium |
| POCI-78 | AI Content Repurposing | To Do | Task | Medium |
| POCI-77 | Predictive Content Performance Scoring | To Do | Task | Medium |
| POCI-76 | AI Video Generation (Runway / Kling / FFmpeg) | To Do | Task | Medium |
| POCI-75 | Custom AI Prompts Based on Industry | To Do | Task | Medium |
| POCI-74 | Integrate DALL·E 3 / Imagen 3 Image Generation | To Do | Task | Medium |
| POCI-73 | Brand Compliance Scoring | To Do | Task | Medium |
| POCI-72 | Prompt Template Management UI | To Do | Task | Medium |
| POCI-71 | Full Maintenance of AI Results | To Do | Task | Medium |
| POCI-70 | Group Create All Content | To Do | Task | Medium |
| POCI-69 | Create and Schedule Blogs at Enterprise Level | To Do | Task | Medium |
| POCI-68 | WordPress Auto-Publishing | To Do | Task | Medium |
| POCI-67 | Pinterest Integration | To Do | Task | Medium |
| POCI-66 | Reddit | To Do | Task | Medium |
| POCI-65 | SEMrush / Search Console for GEO | To Do | Task | Medium |
| POCI-64 | Google Trading Desk | To Do | Task | Medium |
| POCI-63 | Full Paid Advertising Campaign Creation | To Do | Task | Medium |
| POCI-62 | Apple Business Connect / Maps | To Do | Task | Medium |
| POCI-61 | WhatsApp Business API | To Do | Task | Medium |
| POCI-60 | FFM API | To Do | Task | Medium |
| POCI-59 | Social Stats Data Capture (all posted content) | To Do | Task | Medium |
| POCI-58 | Email Integrations (Mailchimp, Klaviyo, ClubReady sync) | To Do | Task | Medium |
| POCI-57 | YouTube (Regular + Shorts) | To Do | Task | Medium |
| POCI-56 | OpenTelemetry Observability | To Do | Task | Medium |
| POCI-55 | Stripe Integration Fix | To Do | Task | Medium |
| POCI-54 | Email Deliverability Tools | To Do | Task | Medium |
| POCI-53 | Best Time to Post (Data-Driven Scheduling) | To Do | Task | Medium |
| POCI-52 | AI Monthly Performance Reports (PDF / Email) | To Do | Task | Medium |
| POCI-51 | Competitor Real-Time Monitoring Alerts | To Do | Task | Medium |
| POCI-50 | Real-Time Analytics Dashboard (WebSockets) | To Do | Task | Medium |
| POCI-49 | Member UGC Reward Incentives | To Do | Task | Medium |
| POCI-48 | Snap2Share Mobile App (React Native / Expo) | To Do | Task | Medium |
| POCI-47 | Homepage Maintenance | To Do | Task | Medium |
| POCI-46 | Lead Form into Website | To Do | Task | Medium |
| POCI-45 | Poll Integration into Websites | To Do | Task | Medium |
| POCI-44 | Email Drip Campaigns | To Do | Task | Medium |
| POCI-43 | Pocial App — Belvedere Proactive Assistant | To Do | Task | Medium |
| POCI-42 | Zapier / Make.com Webhook Integration | To Do | Task | Medium |
| POCI-41 | UGC AI Moderation | To Do | Task | Medium |
| POCI-40 | White-Label / Public API | To Do | Task | Medium |
| POCI-39 | Role-Based Access Control (RBAC) Enhancement | To Do | Task | Medium |
| POCI-38 | Separate Notification Email for Linked Enterprise Accounts | To Do | Task | Medium |
| POCI-37 | Content Lanes — Manufacturer / Agency Supply Chain | To Do | Task | Medium |
| POCI-36 | Franchise / Multi-Location Dashboard | To Do | Task | Medium |
| POCI-35 | Text-to-Upload UGC Capture | To Do | Task | Medium |
| POCI-34 | Schedule All Content (unified calendar) | To Do | Task | Medium |
| POCI-33 | Create and Schedule Blogs at Enterprise Level | To Do | Task | Medium |
| POCI-32 | OpenTelemetry Observability | To Do | Task | Medium |
| POCI-31 | tRPC / Typed API Layer | To Do | Task | Medium |
| POCI-30 | Decompose Monolithic utility.js | To Do | Task | Medium |
| POCI-29 | TypeScript Migration (Backend) | To Do | Task | Medium |
| POCI-28 | Full MongoDB and Code Management | To Do | Task | Medium |
| POCI-27 | Unit Testing, Coding Standards & DB Documentation | To Do | Task | Medium |
| POCI-26 | Pocial AI: Replace Delta Engine with RAG | Done | Task | Medium |
| POCI-25 | Pocial Integration: GBP posting reviews and Insights | To Do | Task | Medium |
| POCI-24 | Pocial Internal: Edit with AI Doesn't use the original send Package | To Do | Bug | Medium |
| POCI-23 | Pocial Internal: Two-factor Authentication | In Testing | Task | Medium |
| POCI-22 | Pocial Internal: Data Vault Clean up | Ready for QA | Task | Medium |
| POCI-21 | Stabilise scraper / crawler (prevent silent mid-run failure) | Done | Subtask | Medium |
| POCI-20 | Combined regression testing — 3 new accounts end-to-end | Done | Subtask | Medium |
| POCI-19 | Fix content generation completion (remove manual re-trigger) | Done | Subtask | Medium |
| POCI-18 | Fix Competitor Analysis frozen / stuck state | Done | Subtask | Medium |
| POCI-17 | Onboarding Process Reliability | Done | Story | Medium |
| POCI-16 | Security API — access token create / refresh / cache | In Progress | Subtask | Medium |
| POCI-15 | Email export to Klaviyo / Mailchimp + campaign trigger | In Progress | Subtask | Medium |
| POCI-14 | Visits V1 — 30d/90d records + lead-type scoring engine | In Progress | Subtask | Medium |
| POCI-13 | Scheduling V1 — class schedule + hours of operation ingestion | In Progress | Subtask | Medium |
| POCI-12 | User V1/V2 — import members + prospects (all club IDs) | In Progress | Subtask | Medium |
| POCI-11 | ClubReady API Integration — Phase 1 | In Progress | Story | Medium |
| POCI-9 | AI "Edit with AI" Generates Incorrect Response | Done | Story | Medium |
| POCI-8 | Insert selected asset into content creation flow | Done | Subtask | Medium |
| POCI-7 | OAuth 2.0 connect flow (mirror Dropbox pattern) | Done | Subtask | Medium |
| POCI-6 | Browse / list Drive files & folders in content UI | Done | Subtask | Medium |
| POCI-5 | Google Drive Asset Repository | Done | Story | Medium |
| POCI-4 | UX simplification pass (Instagram benchmark) | Done | Subtask | Medium |
| POCI-3 | GIF → MP4 conversion on composed asset before publish | Done | Subtask | Medium |
| POCI-2 | Design tab on crop canvas (design-before-generation flow) | Done | Subtask | Medium |
| POCI-1 | Image Editor Enhancements | Done | Story | Medium |

Note: keys POCI-10, POCI-118, and POCI-132 were not present in the source export (deleted, merged, or never created).
