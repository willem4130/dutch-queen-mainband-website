# 🏷️ Google Tag Manager Setup Guide

**Time Required:** 10 minutes
**Difficulty:** Easy - Similar to Google Analytics setup

---

## 🎯 What You'll Do

Create a Google Tag Manager account to manage all your tracking in one place.

**What You'll Get:**
- A Container ID (looks like: `GTM-ABC1234`)
- A central place to manage tracking codes
- More flexibility for future tracking needs

---

## 📋 Before You Start

**You'll Need:**
- The same Google account you used for Analytics
- 10 minutes of time
- Your website URL: `https://dutch-queen-mainband-website.vercel.app`

**Pro Tip:** Keep your Google Analytics Measurement ID handy - you might want it later (optional).

---

## 🚀 Step-by-Step Instructions

### Step 1: Go to Google Tag Manager

1. **Open your web browser**
2. **Visit:** https://tagmanager.google.com/
3. **Click "Create Account"** (if it's your first time)

**If you're already signed in to Google:** Great! Continue to Step 2.
**If not:** Sign in with the same Google account you used for Analytics.

---

### Step 2: Create Your Account

You'll see a form titled "Add a New Account".

#### Account Setup

**Account Name**
**What to enter:** `Dutch Queen Band`

**Why:** This is your organization name. You can manage multiple websites under one account.

**Country**
**What to select:** Choose your country
- Example: `Netherlands` or wherever you're based
- This is for legal compliance and currency settings

**Check the boxes:**
- ✅ "Share data with Google and others" (optional - recommended for support)

**Click "Continue"**

---

### Step 3: Set Up Your Container

A "Container" holds all the tracking codes for one website.

#### Container Setup

**Container name**
**What to enter:** `Dutch Queen Website` or `dutch-queen-mainband-website`

**Where to use Container**
**What to select:**
1. Click the dropdown
2. Select: **"Web"** (the globe icon)

**Important:** Make sure you select "Web" - not iOS, Android, or AMP.

**Click "Create"**

---

### Step 4: Accept Terms of Service

1. **Check the box:**
   - ✅ "I also accept the Data Processing Terms"
2. **Scroll down and check:**
   - ✅ "I agree to the Google Tag Manager Terms of Service Agreement"
3. **Click "Yes"**

---

### Step 5: Get Your Container ID

🎉 **Success!** You'll see a popup titled "Install Google Tag Manager".

**You'll see your Container ID at the top:**
```
Container ID: GTM-XXXXXXX
```

**This is what you need!**

---

### Step 6: Save Your Container ID

**IMPORTANT:** You need this ID for deployment.

#### Copy Your Container ID

Look for the Container ID (format: `GTM-XXXXXXX`)

**How to copy:**
1. **Select the ID** with your mouse (highlight `GTM-XXXXXXX`)
2. **Right-click → Copy** (or Ctrl+C / Cmd+C)

**Example format:** `GTM-ABC1234`
- Always starts with `GTM-`
- Followed by letters and numbers

#### Save It Safely

**Add to your saved IDs:**

Update your text file from Step 1:
```
Google Analytics Measurement ID: G-XXXXXXXXXX
Google Tag Manager Container ID: GTM-XXXXXXX
```

**Save this file!** You'll need both IDs for the next step.

---

### Step 7: Close the Installation Popup

**You'll see installation code** - you can **ignore this!**

**Why?** The code is already installed on your website. You just need to provide the Container ID.

**What to do:**
1. **Click the "X"** in the top right of the popup
2. Or **click "OK"** to close it

---

## ✅ You Now Have Access to Tag Manager

### Your Dashboard

After closing the popup, you'll see the Tag Manager dashboard:

**Left Sidebar:**
- 📊 **Workspace** - Where you manage tags
- 🏷️ **Tags** - Individual tracking codes
- 🎯 **Triggers** - When tags should fire
- 📝 **Variables** - Dynamic values
- 📜 **Versions** - History of changes

**Don't worry about these now** - the basic setup is done!

---

## 🎓 Optional: Link Google Analytics to Tag Manager

**This is OPTIONAL** - the website tracking will work without this.

**But if you want to manage everything in Tag Manager:**

### Add Your GA4 Tag (Optional)

1. **Click "Tags"** in the left sidebar
2. **Click "New"** (top right)
3. **Click the pencil icon** in "Tag Configuration"
4. **Select:** "Google Analytics: GA4 Configuration"
5. **Enter your Measurement ID:** `G-XXXXXXXXXX` (from Step 1)
6. **Under "Triggering":**
   - Click the trigger area
   - Select: "All Pages"
7. **Name your tag:** "GA4 - All Pages"
8. **Click "Save"**
9. **Click "Submit"** (top right)
10. **Version name:** "Initial GA4 Setup"
11. **Click "Publish"**

**What this does:** Routes all Analytics through Tag Manager (gives you more control).

**Skip this if:** You just want the basic setup working.

---

## 📝 What to Keep

### Your Complete Tracking Setup

**You should now have BOTH IDs saved:**

```
Google Analytics Measurement ID: G-XXXXXXXXXX
Google Tag Manager Container ID: GTM-XXXXXXX
```

**Keep these safe!** You need them for the deployment step.

---

## 🔄 Next Steps

### You're 2/3 Done! 🎉

**What you completed:**
- ✅ Created Google Tag Manager account
- ✅ Set up website container
- ✅ Got your Container ID
- ✅ (Optional) Linked Google Analytics

**What's next:**
1. **Open:** `03_VERCEL_DEPLOYMENT.md`
2. Add both IDs to your website
3. Deploy and test!

**Have both IDs ready** - you'll use them in the next step!

---

## 🆘 Troubleshooting

### "I Don't See My Container ID"

**Solution:**
1. Go to: https://tagmanager.google.com/
2. Click on your container name
3. Look at the top of the page
4. Container ID is displayed: `GTM-XXXXXXX`

### "I Closed the Popup and Lost My ID"

**No problem:**
1. Go to https://tagmanager.google.com/
2. Click on your container name
3. The Container ID is always displayed at the top
4. Or click the container ID itself to see installation code again

### "I See Multiple Containers"

**What happened:** You might have created more than one.

**Solution:**
1. Use the most recent one
2. Or delete extras:
   - Click **Admin** (gear icon)
   - Select container
   - Click "Delete"

### "The Installation Code Looks Scary"

**Don't worry!**

You don't need to do anything with that code. It's already installed on your website. Just save your Container ID.

---

## 🎯 Quick Recap

**What you did:**
1. ✅ Visited tagmanager.google.com
2. ✅ Created an account
3. ✅ Set up a web container
4. ✅ Got your Container ID (`GTM-XXXXXXX`)
5. ✅ (Optional) Linked to Google Analytics

**What you have now:**
- Access to Google Tag Manager dashboard
- A Container ID to use in deployment
- Both tracking IDs ready for the website

**Time to complete:** ⏱️ ~10 minutes

---

## 📊 What You've Accomplished So Far

**Completed:**
- ✅ **Step 1:** Google Analytics setup (Measurement ID)
- ✅ **Step 2:** Google Tag Manager setup (Container ID)

**Remaining:**
- ⬜ **Step 3:** Deploy to website (5 minutes)
- ⬜ **Step 4:** Test and verify (5 minutes)

---

**Almost there!** → Open `03_VERCEL_DEPLOYMENT.md` to finish the setup.

**Taking a break?** That's fine! Your IDs are saved in your Google accounts. Just remember where you saved them.
