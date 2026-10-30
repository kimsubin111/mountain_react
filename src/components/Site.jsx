import React from "react";
import { siteText } from "../data/data";

const Site = () => {
    return (
        <section id="site">
            <div className="site_inner">
                <h2 className="site_title">GREAT MOUNTAINS</h2>
                <div className="site_wrap">
                    {siteText.map((site, index) => (
                        <article className={`site_item s${index + 1}`} key={index}>
                            <span className="num">{index + 1}.</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                            </div>
                            <h3 className="title">{site.title}</h3>
                            <div className="btn">
                                <a href={site.site}>SITE</a>
                                <a href={site.view}>VIEW</a>
                            </div>
                            <div className="info">
                                {site.info.map((info, key) => (
                                    <span key={key}>{info}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Site;
