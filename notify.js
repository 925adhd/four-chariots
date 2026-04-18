/* FOUR CHARIOTS — Notify / Waitlist modal
   Submits to Web3Forms (email notification) and Supabase waitlist table.
   Usage: FCNotify.open({ productId, productName, variant }); */
(function(){
  const WEB3FORMS_KEY = "c37cfd1d-0a45-40f8-80bf-b9619c4d00de";
  const SUPABASE_URL  = "https://txeemijqgqomfclezonf.supabase.co";
  const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4ZWVtaWpxZ3FvbWZjbGV6b25mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3NjkzMjgsImV4cCI6MjA4NjM0NTMyOH0.boeu2dy3J-L09LRKQrRWPSvTPevynff5ZVwpeaT8oYM";

  const css = ""
    + ".fcNotify{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;font-family:inherit;}"
    + ".fcNotify[hidden]{display:none;}"
    + ".fcNotify-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);}"
    + ".fcNotify-dialog{position:relative;background:#fff;max-width:440px;width:100%;padding:40px 32px 32px;border:1px solid #e6e6e6;box-shadow:0 20px 60px rgba(0,0,0,.18);animation:fcNotifyIn .25s ease-out;}"
    + "@keyframes fcNotifyIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}"
    + ".fcNotify-close{position:absolute;top:6px;right:8px;background:none;border:none;font-size:26px;color:#464b52;cursor:pointer;line-height:1;padding:0;font-family:inherit;width:44px;height:44px;display:flex;align-items:center;justify-content:center;}"
    + ".fcNotify-close:hover{color:#0b1a2a;}"
    + ".fcNotify-close:focus-visible{outline:2px solid #0b1a2a;outline-offset:2px;}"
    + ".fcNotify-eyebrow{font-size:11px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#464b52;margin-bottom:10px;}"
    + ".fcNotify-title{margin:0 0 10px;font-size:22px;line-height:1.2;letter-spacing:-.01em;color:#0b1a2a;font-weight:700;}"
    + ".fcNotify-body{margin:0 0 20px;font-size:14px;color:#464b52;line-height:1.55;}"
    + ".fcNotify-body strong{color:#0b1a2a;font-weight:700;}"
    + ".fcNotify-label{display:block;font-size:12px;font-weight:700;letter-spacing:.04em;color:#0b1a2a;margin-bottom:6px;}"
    + ".fcNotify-form input[type=email]{width:100%;padding:14px 16px;border:1px solid #e6e6e6;background:#fff;font-size:14px;margin-bottom:10px;font-family:inherit;color:#0b1a2a;box-sizing:border-box;border-radius:0;}"
    + ".fcNotify-form input[type=email]:focus-visible{outline:2px solid #0b1a2a;outline-offset:2px;border-color:#0b1a2a;}"
    + ".fcNotify-error{font-size:12px;color:#b33;margin-bottom:10px;min-height:14px;}"
    + ".fcNotify-submit{width:100%;padding:14px;background:#0b1a2a;color:#fff;border:none;font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;font-family:inherit;}"
    + ".fcNotify-submit:disabled{opacity:.6;cursor:default;}"
    + ".fcNotify-submit:focus-visible{outline:2px solid #0b1a2a;outline-offset:2px;}"
    + ".fcNotify-success{text-align:center;padding:8px 0;}"
    + ".fcNotify-check{width:52px;height:52px;border-radius:50%;background:#e7f0df;color:#3a6b1c;font-size:26px;line-height:52px;margin:0 auto 14px;font-weight:700;}"
    + ".fcNotify-successTitle{font-size:18px;font-weight:700;margin-bottom:6px;color:#0b1a2a;letter-spacing:-.01em;}"
    + ".fcNotify-successBody{font-size:13px;color:#464b52;line-height:1.55;}"
    + "body.fcNotify-open{overflow:hidden;}"
    + "@media (prefers-reduced-motion: reduce){.fcNotify-dialog{animation:none;}}";

  const html = ''
    + '<div class="fcNotify" id="fcNotify" role="dialog" aria-modal="true" aria-labelledby="fcNotifyTitle" hidden>'
    +   '<div class="fcNotify-backdrop" data-close="1"></div>'
    +   '<div class="fcNotify-dialog">'
    +     '<button class="fcNotify-close" data-close="1" aria-label="Close">&times;</button>'
    +     '<div id="fcNotifyFormView">'
    +       '<div class="fcNotify-eyebrow">Join the waitlist</div>'
    +       '<h2 class="fcNotify-title" id="fcNotifyTitle">Get notified</h2>'
    +       '<p class="fcNotify-body" id="fcNotifyBodyProduct">Enter your email and we\'ll reach out the moment <strong id="fcNotifyProductName">this piece</strong> is available. No spam — only release notifications.</p>'
    +       '<p class="fcNotify-body" id="fcNotifyBodyGeneral" hidden>Enter your email and we\'ll let you know when new pieces, drops, or restocks are ready. No spam — only release notifications.</p>'
    +       '<form class="fcNotify-form" id="fcNotifyForm" novalidate>'
    +         '<label class="fcNotify-label" for="fcNotifyEmail">Email address</label>'
    +         '<input type="email" id="fcNotifyEmail" required placeholder="you@email.com" autocomplete="email" aria-describedby="fcNotifyError">'
    +         '<input type="text" name="botcheck" id="fcNotifyBotcheck" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0;" aria-hidden="true">'
    +         '<div class="fcNotify-error" id="fcNotifyError" role="alert" aria-live="polite" aria-atomic="true"></div>'
    +         '<button type="submit" class="fcNotify-submit" id="fcNotifySubmit">Notify me</button>'
    +       '</form>'
    +     '</div>'
    +     '<div class="fcNotify-success" id="fcNotifySuccessView" role="status" aria-live="polite" aria-atomic="true" hidden>'
    +       '<div class="fcNotify-check" aria-hidden="true">&#10003;</div>'
    +       '<div class="fcNotify-successTitle">You\'re on the list</div>'
    +       '<div class="fcNotify-successBody" id="fcNotifySuccessBody">We\'ll email you the moment this is available.</div>'
    +     '</div>'
    +   '</div>'
    + '</div>';

  let injected = false;
  let triggerEl = null;
  const state = { productId:"", productName:"", variant:"" };

  function focusables(container){
    return Array.prototype.slice.call(container.querySelectorAll(
      'button, [href], input:not([type="hidden"]):not([tabindex="-1"]), select, textarea, [tabindex]:not([tabindex="-1"])'
    )).filter(function(el){
      return !el.hasAttribute('disabled') && el.offsetParent !== null;
    });
  }

  function inject(){
    if(injected) return;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    const host = document.createElement("div");
    host.innerHTML = html;
    document.body.appendChild(host.firstElementChild);
    bind();
    injected = true;
  }

  function bind(){
    const modal = document.getElementById("fcNotify");
    const form  = document.getElementById("fcNotifyForm");
    const email = document.getElementById("fcNotifyEmail");
    const err   = document.getElementById("fcNotifyError");
    const btn   = document.getElementById("fcNotifySubmit");

    modal.addEventListener("click", (e) => {
      const t = e.target;
      if (t && t.dataset && t.dataset.close) close();
    });
    document.addEventListener("keydown", (e) => {
      if (modal.hidden) return;
      if (e.key === "Escape") { close(); return; }
      if (e.key === "Tab") {
        const f = focusables(modal);
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      err.textContent = "";
      const addr = (email.value || "").trim();
      if (!addr || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(addr)) {
        err.textContent = "Please enter a valid email.";
        return;
      }
      if (document.getElementById("fcNotifyBotcheck").value) {
        document.getElementById("fcNotifyFormView").hidden = true;
        document.getElementById("fcNotifySuccessView").hidden = false;
        return;
      }
      btn.disabled = true;
      btn.textContent = "Sending...";

      const isGeneral = (state.productId === "general" || !state.productName);
      const productLabel = isGeneral
        ? "General waitlist"
        : state.productName + (state.variant ? " (" + state.variant + ")" : "");

      const fd = new FormData();
      fd.append("access_key", WEB3FORMS_KEY);
      fd.append("botcheck", "");
      fd.append("subject", "FOUR CHARIOTS Waitlist — " + productLabel);
      fd.append("from_name", "FOUR CHARIOTS Waitlist");
      fd.append("form_source", "fc_waitlist");
      fd.append("email", addr);
      fd.append("product_id", state.productId);
      fd.append("product_name", state.productName);
      fd.append("variant", state.variant);
      fd.append("page_url", window.location.href);
      fd.append("message",
        "New waitlist signup\n\n" +
        "Product: " + productLabel + "\n" +
        "Product ID: " + state.productId + "\n" +
        "Variant: " + (state.variant || "—") + "\n" +
        "Email: " + addr + "\n" +
        "Page: " + window.location.href
      );

      const web3 = fetch("https://api.web3forms.com/submit", { method:"POST", body: fd })
        .then(r => r.json()).catch(() => ({ success:false }));

      const supa = fetch(SUPABASE_URL + "/rest/v1/waitlist", {
        method: "POST",
        headers: {
          "apikey": SUPABASE_ANON,
          "Authorization": "Bearer " + SUPABASE_ANON,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({
          email: addr,
          product_id: state.productId,
          product_name: state.productName,
          variant: state.variant,
          source: "web",
          page_url: window.location.href
        })
      }).then(r => ({ ok: r.ok, status: r.status })).catch(() => ({ ok:false }));

      const [w, s] = await Promise.all([web3, supa]);

      if ((w && w.success) || (s && s.ok)) {
        document.getElementById("fcNotifyFormView").hidden = true;
        document.getElementById("fcNotifySuccessView").hidden = false;
      } else {
        err.textContent = (w && w.message) || "Could not submit. Please try again.";
        btn.disabled = false;
        btn.textContent = "Notify me";
      }
    });
  }

  function open(opts){
    inject();
    triggerEl = document.activeElement;
    state.productId   = (opts && opts.productId)   || "";
    state.productName = (opts && opts.productName) || "";
    state.variant     = (opts && opts.variant)     || "";
    const isGeneral = (state.productId === "general" || !state.productName);
    document.getElementById("fcNotifyBodyProduct").hidden = isGeneral;
    document.getElementById("fcNotifyBodyGeneral").hidden = !isGeneral;
    document.getElementById("fcNotifySuccessBody").textContent = isGeneral
      ? "We'll email you when something new is ready."
      : "We'll email you the moment this is available.";
    if (!isGeneral) {
      document.getElementById("fcNotifyProductName").textContent = state.productName;
    }
    document.getElementById("fcNotifyFormView").hidden = false;
    document.getElementById("fcNotifySuccessView").hidden = true;
    const btn = document.getElementById("fcNotifySubmit");
    btn.disabled = false;
    btn.textContent = "Notify me";
    document.getElementById("fcNotifyError").textContent = "";
    document.getElementById("fcNotifyEmail").value = "";
    document.getElementById("fcNotify").hidden = false;
    document.body.classList.add("fcNotify-open");
    setTimeout(() => document.getElementById("fcNotifyEmail").focus(), 60);
  }

  function close(){
    const m = document.getElementById("fcNotify");
    if (m) m.hidden = true;
    document.body.classList.remove("fcNotify-open");
    if (triggerEl && typeof triggerEl.focus === "function") {
      try { triggerEl.focus(); } catch (e) { /* element may be gone */ }
    }
    triggerEl = null;
  }

  window.FCNotify = { open: open, close: close };
})();
