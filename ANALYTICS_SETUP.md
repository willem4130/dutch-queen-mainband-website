# Google Analytics & Tag Manager Setup Guide

This guide will help you set up Google Analytics 4 (GA4) and Google Tag Manager (GTM) for tracking website visitors and events.

## 📋 Prerequisites

You'll need:
- A Google account
- Access to Google Analytics (https://analytics.google.com/)
- Access to Google Tag Manager (https://tagmanager.google.com/)

---

## 🎯 Step 1: Set Up Google Analytics 4 (GA4)

### Create GA4 Property

1. **Go to Google Analytics**: https://analytics.google.com/
2. **Create Account** (if you don't have one):
   - Click "Start measuring"
   - Enter account name: "Dutch Queen Band"
   - Configure data sharing settings
   - Click "Next"

3. **Create Property**:
   - Property name: "Dutch Queen Website"
   - Select timezone and currency
   - Click "Next"

4. **Business Details**:
   - Industry: "Arts & Entertainment"
   - Business size: Select appropriate size
   - Usage: "Examine user behavior"
   - Click "Create"

5. **Set Up Data Stream**:
   - Select "Web"
   - Website URL: `https://yourdomain.com`
   - Stream name: "Dutch Queen Main Site"
   - Click "Create stream"

6. **Copy Measurement ID**:
   - You'll see a Measurement ID like: `G-XXXXXXXXXX`
   - **Save this** - you'll need it later

---

## 🏷️ Step 2: Set Up Google Tag Manager (GTM)

### Create GTM Container

1. **Go to Tag Manager**: https://tagmanager.google.com/
2. **Create Account**:
   - Account Name: "Dutch Queen Band"
   - Country: Select your country
   - Click "Continue"

3. **Setup Container**:
   - Container name: "Dutch Queen Website"
   - Target platform: "Web"
   - Click "Create"

4. **Accept Terms of Service**

5. **Copy Container ID**:
   - You'll see a Container ID like: `GTM-XXXXXXX`
   - **Save this** - you'll need it later
   - You can close the installation instructions (we've already integrated it)

---

## ⚙️ Step 3: Configure Environment Variables

1. **Open your `.env.local` file** in the project root:
   ```bash
   # Navigate to project
   cd dutch-queen-mainband-website

   # Edit .env.local file
   nano .env.local
   ```

2. **Replace the placeholder values** with your actual IDs:
   ```bash
   # Google Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123XYZ  # Replace with your actual ID

   # Google Tag Manager
   NEXT_PUBLIC_GTM_ID=GTM-ABC1234  # Replace with your actual ID
   ```

3. **Save the file** (Ctrl+O, Enter, Ctrl+X in nano)

---

## 🔧 Step 4: Link GA4 to GTM (Optional but Recommended)

This allows you to manage all tracking through Tag Manager:

1. **In Google Tag Manager**:
   - Click "Tags" → "New"
   - Click tag configuration
   - Select "Google Analytics: GA4 Configuration"
   - Enter your Measurement ID: `G-XXXXXXXXXX`
   - Under Triggering, select "All Pages"
   - Name it: "GA4 - All Pages"
   - Click "Save"

2. **Submit Changes**:
   - Click "Submit" (top right)
   - Version name: "Initial GA4 Setup"
   - Click "Publish"

---

## 🚀 Step 5: Deploy and Test

### Deploy to Vercel

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add Google Analytics and Tag Manager integration"
   git push origin main
   ```

2. **Vercel will automatically deploy** the changes

3. **Add environment variables in Vercel**:
   - Go to: https://vercel.com/dashboard
   - Select your project
   - Go to "Settings" → "Environment Variables"
   - Add:
     - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
     - `NEXT_PUBLIC_GTM_ID` = `GTM-XXXXXXX`
   - Click "Save"
   - Redeploy your site

### Test Locally First

1. **Start development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser**:
   - Go to: http://localhost:3000
   - Open Developer Tools (F12)
   - Go to "Network" tab
   - Filter by "gtag" or "gtm"
   - You should see requests to Google Analytics

3. **Check Real-Time Reports**:
   - Go to Google Analytics
   - Click "Reports" → "Realtime"
   - Visit your local site
   - You should see yourself in the real-time report

---

## 🎯 Step 6: Set Up Event Tracking (Optional)

### Track Button Clicks with GTM

1. **In Google Tag Manager**:
   - Click "Tags" → "New"
   - Tag Configuration: "Google Analytics: GA4 Event"
   - Configuration Tag: Select your GA4 Configuration tag
   - Event Name: `button_click`
   - Event Parameters:
     - `button_text` = `{{Click Text}}`

2. **Set up Trigger**:
   - Triggering → Click "+"
   - Choose "Click - All Elements"
   - Name it: "All Link Clicks"
   - Fire on: "Some Clicks"
   - Condition: "Click URL contains http"

3. **Save and Publish**

### Track Custom Events in Code

Add this to any component:

```typescript
// src/lib/analytics.ts
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

// Usage in component:
import { trackEvent } from '@/lib/analytics';

const handleButtonClick = () => {
  trackEvent('tour_date_click', {
    venue: 'Madison Square Garden',
    date: '2025-12-01'
  });
};
```

---

## 📊 What You Can Track

### Automatic Tracking (Built-in):
- ✅ Page views
- ✅ Session duration
- ✅ Geographic location
- ✅ Device type (mobile/desktop)
- ✅ Traffic sources
- ✅ Bounce rate

### Custom Events You Can Add:
- 🎵 Music player interactions
- 🎫 Tour date clicks
- 📧 Newsletter signups
- 🖼️ Gallery image views
- 📱 Social media link clicks
- 🎸 Video plays

---

## 🔍 Verify Installation

### Check if Scripts Are Loading:

1. **Open your website**
2. **Open DevTools** (F12)
3. **Go to Console tab**
4. **Type**: `window.dataLayer`
   - Should return an array
5. **Type**: `window.gtag`
   - Should return a function

### Check in Google Analytics:

1. **Go to Google Analytics**
2. **Select your property**
3. **Click "Realtime"**
4. **Visit your website**
5. **You should see yourself** in the real-time report within 30 seconds

### Check in Google Tag Manager:

1. **Go to GTM**
2. **Click "Preview"** (top right)
3. **Enter your website URL**
4. **Click "Connect"**
5. **You should see** Tag Manager's debug console

---

## 🛡️ Privacy & GDPR Compliance

### Important Considerations:

1. **Cookie Consent**:
   - Consider adding a cookie consent banner
   - Popular options: CookieYes, OneTrust, Cookiebot

2. **Privacy Policy**:
   - Update your privacy policy to mention Google Analytics
   - Explain what data you collect

3. **IP Anonymization**:
   - GA4 automatically anonymizes IPs in the EU

4. **User Opt-Out**:
   - Provide a way for users to opt-out of tracking

---

## 🆘 Troubleshooting

### Analytics Not Working?

**Check these common issues:**

1. ✅ **Environment variables** are set correctly
2. ✅ **IDs are correct** (no typos)
3. ✅ **NEXT_PUBLIC_ prefix** is present
4. ✅ **.env.local** is in the root directory
5. ✅ **Restarted dev server** after adding env vars
6. ✅ **Browser extensions** (ad blockers) are disabled for testing
7. ✅ **Check browser console** for errors

### Still Not Working?

1. **Check Network tab** in DevTools:
   - Filter by "gtag" or "gtm"
   - Look for 200 status codes

2. **Check GTM Debug Mode**:
   - Click "Preview" in GTM
   - See which tags are firing

3. **Verify env vars loaded**:
   ```javascript
   console.log(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
   console.log(process.env.NEXT_PUBLIC_GTM_ID);
   ```

---

## 📚 Additional Resources

- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [GTM Documentation](https://developers.google.com/tag-platform/tag-manager)
- [Next.js Script Component](https://nextjs.org/docs/basic-features/script)
- [GA4 Event Tracking](https://developers.google.com/analytics/devguides/collection/ga4/events)

---

## ✅ Quick Checklist

- [ ] Created Google Analytics account and property
- [ ] Copied GA4 Measurement ID
- [ ] Created Google Tag Manager account and container
- [ ] Copied GTM Container ID
- [ ] Updated `.env.local` with both IDs
- [ ] Committed changes to git
- [ ] Added env vars to Vercel dashboard
- [ ] Tested locally (saw yourself in real-time reports)
- [ ] Deployed to production
- [ ] Verified tracking is working in production
- [ ] Set up custom events (optional)
- [ ] Added cookie consent banner (recommended)

---

**Need help?** Check the troubleshooting section or open an issue on GitHub.
