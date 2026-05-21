/** Pure CSS background — animated gradient only (lightweight). */
export function SiteBackground() {
  return (
    <div className="site-bg" aria-hidden>
      <div className="site-bg__gradient" />
      <div className="site-bg__blob site-bg__blob--1" />
      <div className="site-bg__blob site-bg__blob--2" />
      <div className="site-bg__blob site-bg__blob--3" />
    </div>
  );
}
