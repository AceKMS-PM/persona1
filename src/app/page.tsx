export default function Home() {
  return (
    <div className="editorial-grid px-5 pt-20 pb-20">
      <div className="col-span-12 md:col-span-8 lg:col-span-6">
        <h1 className="display-lg mb-6">
          Thoughts on <br /> 
          <span className="italic">Design, Code</span> & <br />
          Knowledge.
        </h1>
        <p className="body-lg text-brand-smoke max-w-xl mb-12">
          A digital garden where I document my journey through software engineering, 
          curate my best projects, and share nuanced viewpoints on the modern web.
        </p>
        <div className="flex gap-4">
          <a href="/articles" className="label-caps bg-brand-charcoal text-white px-6 py-3 hover:opacity-80 transition-opacity dark:bg-dark-onSurface dark:text-dark-canvas">
            Read Articles
          </a>
          <a href="/projects" className="label-caps border border-brand-charcoal px-6 py-3 hover:bg-brand-charcoal hover:text-white transition-all dark:border-dark-onSurface dark:hover:bg-dark-onSurface dark:hover:text-dark-canvas">
            View Work
          </a>
        </div>
      </div>
    </div>
  );
}
