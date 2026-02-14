// Lineage Hub — Supabase Configuration
const LINEAGE_CONFIG = {
  supabaseUrl: 'https://chozbcrghlmianopmdxs.supabase.co',
  supabaseKey: 'sb_publishable_ciGFMc09hjhTRn40Wn_U6Q_sWSWCMMc',
  fallbackDataPath: 'data/families/brown.json'
};

// Initialize Supabase client (requires supabase-js loaded first)
function initSupabase() {
  if (typeof supabase !== 'undefined' && supabase.createClient) {
    return supabase.createClient(LINEAGE_CONFIG.supabaseUrl, LINEAGE_CONFIG.supabaseKey);
  }
  return null;
}

// Connection status indicator helper
function createConnectionIndicator() {
  const el = document.createElement('div');
  el.id = 'db-status';
  el.style.cssText = 'position:fixed;bottom:12px;right:12px;font-size:.7rem;padding:4px 10px;border-radius:12px;z-index:9999;font-family:Inter,sans-serif;opacity:.7;transition:opacity .3s';
  el.addEventListener('mouseenter', () => el.style.opacity = '1');
  el.addEventListener('mouseleave', () => el.style.opacity = '.7');
  document.body.appendChild(el);
  return el;
}

function setConnectionStatus(el, status) {
  if (!el) return;
  if (status === 'connected') {
    el.textContent = '● Supabase';
    el.style.background = 'rgba(46,125,50,.2)';
    el.style.color = '#66bb6a';
    el.style.border = '1px solid rgba(46,125,50,.3)';
  } else if (status === 'fallback') {
    el.textContent = '● Local JSON';
    el.style.background = 'rgba(212,118,10,.2)';
    el.style.color = '#ffb74d';
    el.style.border = '1px solid rgba(212,118,10,.3)';
  } else {
    el.textContent = '● Offline';
    el.style.background = 'rgba(198,40,40,.2)';
    el.style.color = '#ef5350';
    el.style.border = '1px solid rgba(198,40,40,.3)';
  }
}
