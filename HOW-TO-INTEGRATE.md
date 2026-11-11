# Skilverss redesign — integration guide

## Kya nahi chhoड़ना (touch NAHI karna)
- `middleware.ts`
- `app/admin/` (poora folder)
- `app/login/` (poora folder)
- `.env.local`

Ye sab jaisa hai waisa hi rahega. Naye design ka in par koi asar nahi padega
kyunki homepage `(marketing)` naam ke ek "route group" ke andar hai —
`/admin` aur `/login` uske bahar hain.

## Files kahan copy karni hain

Apne real project (VS Code) mein:

1. **`app/globals.css`** — is file ka poora content copy karke apni
   existing `app/globals.css` ke content ko **replace** kar dein
   (agar aapki file mein pehle se koi custom CSS hai jo aap rakhna
   chahte hain, uska niche add kar dein — replace mat karein, append karein).

2. **`app/layout.tsx`** — apne existing `app/layout.tsx` ko is content se
   replace kar dein.

3. **`components/Navbar.tsx`**, **`components/Footer.tsx`**,
   **`components/Reveal.tsx`** — inhe apne project ke `components/` folder
   mein copy karein (agar `components` folder exist nahi karta, naya bana lein
   `app` ke saath sibling folder ke roop mein, root mein).

4. **`app/(marketing)/layout.tsx`** aur **`app/(marketing)/page.tsx`** —
   naya folder banayein exactly is naam se: `(marketing)` — bracket ke saath.
   Apni existing `app/page.tsx` ko yahan move kar dein (delete kar dein purani
   jagah se, sirf `(marketing)` ke andar rakhein).

## Final folder structure aisa dikhna chahiye

```
app/
  (marketing)/
    layout.tsx      ← naya (Navbar + Footer wrap karta hai)
    page.tsx         ← naya homepage design
  admin/
    page.tsx         ← UNTOUCHED
  login/
    page.tsx         ← UNTOUCHED
  layout.tsx          ← updated (sirf fonts, navbar/footer nahi)
  globals.css         ← updated (design tokens + styles)
components/
  Navbar.tsx           ← naya
  Footer.tsx           ← naya
  Reveal.tsx           ← naya
middleware.ts           ← UNTOUCHED
```

## Test karne ke steps

1. Files copy karne ke baad:
   ```
   rm -rf .next
   npm run dev
   ```
2. `localhost:3000/` open karein → naya design dikhna chahiye.
3. `localhost:3000/admin` aur `localhost:3000/login` open karein →
   ye **bilkul waise hi** dikhne chahiye jaise pehle the (bina navbar/footer ke).

## Aage kya

Reference site mein aur bhi pages hain (About, Services, individual service
pages, Portfolio, Contact) jo abhi convert nahi kiye — sirf homepage kiya hai
taaki aap pehle design/flow verify kar lein. Ye theek lage to next batayein,
main baaki pages bhi isi pattern (`app/(marketing)/about/page.tsx` etc.) mein
bana dunga.

Order button abhi ek placeholder Google Form link (`forms.gle/...`) khol raha
hai — `components/Navbar.tsx` aur homepage mein `ORDER_FORM_URL` / order links
ko apne real link se replace kar dein.
