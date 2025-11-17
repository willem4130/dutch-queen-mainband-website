/**
 * Google Analytics tracking utilities
 * Use these functions to track custom events throughout your application
 */

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Track a custom event
 * @param eventName - Name of the event (e.g., 'tour_click', 'video_play')
 * @param eventParams - Optional parameters to send with the event
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  } else {
    // In development, log the event instead
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Analytics Event:", eventName, eventParams);
    }
  }
}

/**
 * Track a page view
 * @param url - The page URL
 * @param title - The page title
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: url,
      page_title: title || document.title,
    });
  }
}

/**
 * Track when a user clicks on a tour date
 */
export function trackTourDateClick(venue: string, date: string) {
  trackEvent("tour_date_click", {
    venue,
    date,
    event_category: "engagement",
  });
}

/**
 * Track when a user plays a video
 */
export function trackVideoPlay(videoName: string) {
  trackEvent("video_play", {
    video_name: videoName,
    event_category: "engagement",
  });
}

/**
 * Track when a user opens the gallery lightbox
 */
export function trackGalleryView(imageName: string, imageIndex: number) {
  trackEvent("gallery_image_view", {
    image_name: imageName,
    image_index: imageIndex,
    event_category: "engagement",
  });
}

/**
 * Track when a user clicks on a social media link
 */
export function trackSocialClick(platform: string) {
  trackEvent("social_click", {
    platform,
    event_category: "engagement",
  });
}

/**
 * Track when a user submits a contact form
 */
export function trackFormSubmit(formName: string) {
  trackEvent("form_submit", {
    form_name: formName,
    event_category: "conversion",
  });
}

/**
 * Track when a user clicks on an external link
 */
export function trackExternalLinkClick(url: string, linkText: string) {
  trackEvent("external_link_click", {
    url,
    link_text: linkText,
    event_category: "engagement",
  });
}
