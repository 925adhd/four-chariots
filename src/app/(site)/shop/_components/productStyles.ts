// Shared page-specific styles for the four Core Collection product pages.
// These rules are NOT in globals.css — they are scoped to the product detail
// pages (CHOSEN / FORGIVEN / GRATEFUL / UNASHAMED).

export const PRODUCT_PAGE_CSS = `
  .pageTitle{
    text-align:center;
    padding: 40px 0 20px;
  }
  .pageTitle h1{
    margin:0;
    font-size: clamp(28px, 3.5vw, 44px);
    text-transform:uppercase;
    letter-spacing:0.10em;
    font-weight:950;
    color:var(--ink);
  }
  .pageTitle p{
    margin:8px 0 0;
    font-size:14px;
    color:var(--muted);
  }

  .showcase{
    display:grid;
    grid-template-columns: 1.07fr 0.93fr;
    gap:0;
    border:1px solid var(--line);
    background:var(--bg);
    overflow:hidden;
    max-width:900px;
    margin:12px auto 0;
  }
  .showcase.elevated{
    box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  }
  .scGallery{
    background:#fafafa;
    border-right:1px solid var(--line);
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:8px;
    padding:18px 10px 18px 18px;
  }
  .scMainImg{
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    min-width:0;
  }
  .scMainImg img{
    max-width:100%;
    max-height:450px;
    object-fit:contain;
    transition: opacity .3s ease;
  }
  .scThumbs{
    display:flex;
    flex-direction:column;
    order:-1;
    flex-shrink:0;
    max-height:450px;
    overflow-y:auto;
    gap:8px;
    justify-content:flex-start;
  }
  .scThumb{
    width:70px;
    height:70px;
    border:2px solid transparent;
    background:var(--soft);
    overflow:hidden;
    cursor:pointer;
    transition: border-color .2s ease;
    padding:4px;
  }
  .scThumb.active{ border-color:var(--ink); }
  .scThumb img{
    width:100%;
    height:100%;
    object-fit:contain;
  }
  .scInfo{
    padding:24px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    gap:12px;
  }
  .scTitle{
    margin:0;
    font-size: clamp(24px, 3vw, 36px);
    line-height:1;
    letter-spacing:-0.03em;
    text-transform:uppercase;
    font-weight:950;
    color:var(--ink);
  }
  .scPrice{
    font-size:20px;
    font-weight:900;
    color:var(--ink);
    letter-spacing:-0.02em;
  }
  .scDesc{
    color:var(--muted);
    font-size:14px;
    line-height:1.6;
    max-width:48ch;
  }
  .product-material-note {
    font-size:0.9rem;
    letter-spacing:0.14em;
    text-transform:uppercase;
    margin:6px 0 14px 0;
    opacity:0.65;
    color:var(--muted);
    font-weight:500;
  }
  .product-divider {
    border: none;
    border-top: 1px solid rgba(0,0,0,0.08);
    margin: 14px 0 18px 0;
  }
  .product-description { margin-top: 18px; }
  .scripture-hint { font-size:12px; color:var(--muted); margin:8px 0; }
  .scLabel{
    font-size:12px;
    font-weight:800;
    text-transform:uppercase;
    letter-spacing:0.10em;
    color:var(--ink);
  }
  .scLabel .val{
    font-weight:500;
    color:var(--muted);
    text-transform:none;
    letter-spacing:0;
    margin-left:6px;
  }
  .sizeBtns{
    display:flex;
    gap:6px;
    flex-wrap:wrap;
    margin-top:8px;
  }
  .sizeBtn{
    padding:8px 14px;
    font-size:12px;
    font-weight:700;
    font-family:var(--font);
    letter-spacing:0.04em;
    border:1px solid var(--line);
    background:transparent;
    color:var(--text);
    cursor:pointer;
    transition: border-color .2s ease, background .2s ease;
  }
  .sizeBtn:hover{ border-color:var(--ink); }
  .sizeBtn.active{
    background:var(--ink);
    color:var(--bg);
    border-color:var(--ink);
  }
  .scColors{
    display:flex;
    gap:8px;
  }
  .scSwatch{
    width:34px;
    height:34px;
    border-radius:50%;
    border:2px solid transparent;
    cursor:pointer;
    padding:0;
    background:none;
    transition: border-color .2s ease, transform .15s ease;
  }
  .scSwatch:hover{ transform:scale(1.1); }
  .scSwatch.active{ border-color:var(--ink); }
  .scSwatch.coming-soon{ margin-left:10px; }
  .scSwatch .inner{
    display:block;
    width:100%;
    height:100%;
    border-radius:50%;
    border:1px solid var(--line);
    background-size:cover;
    background-position:center;
  }
  .scMeta{
    padding-top:14px;
    border-top:1px solid var(--line);
    display:flex;
    flex-direction:column;
    gap:8px;
  }
  .scMetaItem{
    display:flex;
    align-items:center;
    gap:8px;
    font-size:12px;
    color:var(--muted);
  }
  .scMetaItem svg{
    width:16px;
    height:16px;
    flex-shrink:0;
    color:var(--ink);
  }

  .memberBanner{
    background:var(--ink);
    color:#fff;
    text-align:center;
    padding:10px 16px;
    font-size:12px;
    font-weight:700;
    letter-spacing:0.06em;
    text-transform:uppercase;
  }
  .memberBanner a{
    color:#fff;
    text-decoration:underline;
    text-underline-offset:3px;
    margin-left:6px;
    font-weight:900;
  }
  .memberBanner a:hover{ opacity:.8; }

  .craftScroll{
    margin-top:32px;
    border-top:1px solid var(--line);
  }
  .craftBlock{
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    gap:20px;
    padding:37px 0;
    border-bottom:1px solid var(--line);
  }
  .craftBlock img{
    width:100%;
    max-width:520px;
    height:auto;
    object-fit:cover;
    border:1px solid rgba(0,0,0,0.05);
  }
  .craftText{ max-width:48ch; }
  .craftText h3{
    margin:0 0 8px;
    font-size:14px;
    letter-spacing:0.10em;
    text-transform:uppercase;
    color:var(--ink);
    font-weight:800;
  }
  .craftText p{
    margin:0;
    color:var(--muted);
    font-size:13px;
    line-height:1.7;
    max-width:42ch;
    margin-left:auto;
    margin-right:auto;
  }
  .craftBlock:last-child img{
    max-width:360px;
  }

  @media (max-width: 980px){
    .pageTitle{ padding: 28px 0 14px; }
    .pageTitle h1{ font-size: clamp(24px, 7vw, 36px); }

    .showcase{ grid-template-columns: 1fr; }
    .scGallery{ flex-direction:column; border-right:none; border-bottom:1px solid var(--line); padding:14px; align-items:center; }
    .scMainImg{ justify-content:center; }
    .scMainImg img{ max-height:280px; }
    .scThumbs{ flex-direction:row; order:0; max-height:none; overflow-y:visible; gap:6px; flex-wrap:wrap; justify-content:center; }
    .scThumb{ width:48px; height:48px; }
    .scThumb.model-thumb{ order:-1; }
    .scInfo{ padding:18px; gap:10px; align-items:center; text-align:center; }
    .sizeBtns{ justify-content:center; }
    .scColors{ justify-content:center; }
    .scMeta{ justify-content:center; gap:6px; }
    .scMetaItem{ justify-content:center; }
    .scTitle{ font-size: clamp(22px, 6vw, 32px); }
    .scPrice{ font-size:18px; }
    .scDesc{ font-size:13px; }

    .craftBlock{ gap:4px; padding:20px 0; }
    .craftBlock:last-child img{ max-width:85%; }
  }
`;
