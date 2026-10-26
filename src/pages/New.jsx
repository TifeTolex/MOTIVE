
      {/* COMING SOON */}
      <section className="new-upcoming section-spacing">
        <div className="new-section-heading">
          <div>
            <span className="new-eyebrow">ON THE HORIZON</span>
            <h2>COMING SOON<span>.</span></h2>
            <p>Something new is always in motion.</p>
          </div>
        </div>

        <div className="products-grid">
          {UPCOMING_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* SERIES */}
      <section className="new-series section-spacing">
        <div className="new-section-heading">
          <div>
            <span className="new-eyebrow">MORE THAN A COLLECTION</span>
            <h2>THE SERIES<span>.</span></h2>
            <p>Different expressions. One purpose.</p>
          </div>

          <Link to="/collections" className="new-text-link">
            EXPLORE COLLECTIONS ↗
          </Link>
        </div>

        <div className="new-series-grid">
          {SERIES.map((series) => (
            <Link
              to="/collections"
              key={series.name}
              className={`new-series-card ${series.className}`}
            >
              <span>{series.label}</span>

              <div>
                <h3>{series.name}<span>.</span></h3>
                <p>{series.description}</p>
              </div>

              <b>EXPLORE SERIES ↗</b>
            </Link>
          ))}
        </div>
      </section>
