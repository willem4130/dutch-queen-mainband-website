# Band Website Content Form

Fill in this form with your band's information. Replace all placeholder text with your actual content.
**Do not worry about JSON formatting** - just paste your text into each section.

---

## 1. Basic Band Information

### Band Name
*The official name of your band (appears in browser tab, hero section, etc.)*

```
Your Band Name Here
```

### Tagline
*A short, catchy phrase that captures your band's essence (5-10 words)*
*Example: "Where Rock Meets Soul" or "Electronic Dreams Come Alive"*

```
Your Tagline Here
```

### Genre
*Primary music genre (one word: rock, pop, metal, indie, electronic, jazz, etc.)*

```
rock
```

### Established Year
*Year your band was formed*

```
2024
```

---

## 2. Band Descriptions

### Short Description
*Brief introduction for SEO and social media (1-2 sentences, ~20 words)*
*Example: "A high-energy rock band delivering unforgettable live performances with original music and classic covers."*

```
Write your short description here (1-2 sentences)
```

### Medium Description
*Main about section content (2-3 paragraphs, 50-100 words)*
*Tell your band's story, musical style, what makes you unique*

```
Write your medium description here.

This can span multiple paragraphs. Talk about your musical influences,
your performance style, what audience can expect from your shows.

Keep it engaging and authentic to your band's personality.
```

### Long Description
*Detailed band story for dedicated About page (3-5 paragraphs, 150-250 words)*
*Include origin story, evolution, milestones, musical philosophy*

```
Write your complete band story here.

Include how the band started, key moments in your journey,
your creative process, and your vision for the future.

This is where you can really dive deep into what drives
your music and connects you with your audience.

Make it personal and compelling.
```

---

## 3. Band Story Elements

### Founding Story
*How and why the band was formed (2-3 sentences)*

```
Your founding story here
```

### Mission Statement
*What you aim to achieve with your music (1-2 sentences)*

```
Your mission here
```

### Vision
*Where you see the band going (1-2 sentences)*

```
Your vision here
```

---

## 4. Band Members

*List each band member. Copy the template below for each member.*

### Member 1

**Name:**
```
Member Name
```

**Role:**
```
Lead Vocals / Guitar / Drums / etc.
```

**Bio:**
*Short bio about this member (2-3 sentences)*
```
Member bio here
```

**Photo Filename:**
*Photo should be placed in: /content/bands/[your-band-name]/assets/members/*
```
member1.jpg
```

---

### Member 2

**Name:**
```
Member Name
```

**Role:**
```
Role
```

**Bio:**
```
Member bio here
```

**Photo Filename:**
```
member2.jpg
```

---

*Add more members as needed by copying the template above*

---

## 5. Achievements Timeline

*List notable achievements, awards, milestones. One per line.*

### 2024
```
Achievement description
```

### 2023
```
Achievement description
```

*Add more years as needed*

---

## 6. Contact Information

### Email
*Primary contact email*
```
contact@yourband.com
```

### Phone (optional)
*Leave blank if not applicable*
```
+1 (555) 123-4567
```

### Address (optional)
*Leave blank if not applicable*
```
City, State, Country
```

---

## 7. Social Media Links

*Paste your full social media URLs. Leave blank if you don't use that platform.*

### Facebook
```
https://facebook.com/yourbandname
```

### Instagram
```
https://instagram.com/yourbandname
```

### Twitter/X
```
https://twitter.com/yourbandname
```

### YouTube
```
https://youtube.com/@yourbandname
```

### Spotify
```
https://open.spotify.com/artist/your-id
```

### Bandcamp
```
https://yourbandname.bandcamp.com
```

### TikTok (optional)
```

```

### SoundCloud (optional)
```

```

---

## 8. SEO & Meta Information

### Meta Title
*Browser tab title and search engine title (50-60 characters)*
*Example: "Rock Band Name | Official Website | Live Music & Tour Dates"*

```
Your Band Name | Official Website
```

### Meta Description
*Description for search engines (150-160 characters)*
*This appears in Google search results*

```
Your compelling meta description for search engines here
```

### Keywords
*5-10 relevant keywords for SEO, comma-separated*
*Example: live music, rock band, tour dates, original music, local concerts*

```
keyword1, keyword2, keyword3, keyword4, keyword5
```

---

## 9. Upcoming Shows

*List upcoming shows. Copy template for each show.*

### Show 1

**Date:**
*Format: YYYY-MM-DD*
```
2025-01-15
```

**Time:**
*24-hour format: HH:MM*
```
20:00
```

**Venue Name:**
```
The Music Venue
```

**City:**
```
City Name
```

**State/Province:**
```
State/Province
```

**Country:**
```
Country
```

**Ticket URL:**
*Direct link to buy tickets*
```
https://tickets.example.com/your-show
```

**Sold Out:**
*true or false*
```
false
```

**Featured Show:**
*Set to true for your most important upcoming show*
```
true
```

---

*Copy the show template above for additional shows*

---

## Setup Instructions

Once you've filled in all sections above:

1. Save this file
2. Run the setup command: `node scripts/setup-content.js`
3. The script will automatically generate all necessary JSON files
4. Check the output for any validation errors
5. Your content is ready to use!

**Next Step:** Fill out `02_HERO_CONFIGURATION.md` then `03_MEDIA_CHECKLIST.md` and upload your images/videos
