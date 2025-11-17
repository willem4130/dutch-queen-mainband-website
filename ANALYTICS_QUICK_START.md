# Quick Start: Google Analytics & Tag Manager

## 🚀 What Was Added

Three new components for tracking:
- ✅ `src/components/GoogleAnalytics.tsx` - GA4 tracking
- ✅ `src/components/GoogleTagManager.tsx` - GTM tracking
- ✅ `src/lib/analytics.ts` - Custom event tracking utilities

## ⚡ 5-Minute Setup

### 1. Get Your IDs

**Google Analytics 4:**
1. Go to https://analytics.google.com/
2. Create property → Get Measurement ID: `G-XXXXXXXXXX`

**Google Tag Manager:**
1. Go to https://tagmanager.google.com/
2. Create container → Get Container ID: `GTM-XXXXXXX`

### 2. Update Environment Variables

Edit `.env.local`:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123XYZ  # Your actual ID
NEXT_PUBLIC_GTM_ID=GTM-ABC1234              # Your actual ID
```

### 3. Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 and check:
- Browser DevTools → Network → Filter "gtag"
- Google Analytics → Realtime → See yourself

### 4. Deploy to Vercel

```bash
git add .
git commit -m "Add Google Analytics and Tag Manager"
git push origin main
```

Then in Vercel dashboard:
- Settings → Environment Variables
- Add both `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_GTM_ID`
- Redeploy

## 📊 Track Custom Events

```typescript
import { trackEvent, trackTourDateClick, trackSocialClick } from '@/lib/analytics';

// Track any event
trackEvent('button_click', { button_name: 'tour_dates' });

// Or use pre-built helpers
trackTourDateClick('Madison Square Garden', '2025-12-01');
trackSocialClick('instagram');
```

## 📚 Full Documentation

See `ANALYTICS_SETUP.md` for:
- Detailed setup instructions
- Event tracking examples
- Troubleshooting guide
- Privacy/GDPR considerations

## ✅ Checklist

- [ ] Got GA4 Measurement ID
- [ ] Got GTM Container ID
- [ ] Updated `.env.local`
- [ ] Tested locally (saw yourself in GA Realtime)
- [ ] Committed changes
- [ ] Added env vars to Vercel
- [ ] Deployed and verified production

**Need help?** See `ANALYTICS_SETUP.md` for troubleshooting.
