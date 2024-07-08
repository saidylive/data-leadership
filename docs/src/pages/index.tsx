/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// @ts-nocheck
import { useRef, useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Carousel } from 'antd';
import styled from '@emotion/styled';
import GitHubButton from 'react-github-btn';
import { mq } from '../utils';
import { Databases } from '../resources/data';
import ReactPlayer from 'react-player';

const VideoPreview = ({ videoId }) => {
  const videoUrl = `https://drive.google.com/file/d/1DqpFmb7IQQiDAvKnA88IdttbQVfGSoFU/view?usp=drive_link`;

};

const { colors } = supersetTheme;

const StyledMain = styled('main')`
  text-align: center;
`;

const StyledTitleContainer = styled('div')`
  position: relative;
  padding: 130px 20px 0;
  margin-bottom: 160px;
  background-image: url('/img/grid-background.jpg');
  background-size: cover;
  ${mq[1]} {
    margin-bottom: 100px;
  }
  .info-container {
    position: relative;
    z-index: 4;
  }
  .superset-mark {
    ${mq[1]} {
      width: 140px;
    }
  }
  .info-text {
    font-size: 30px;
    line-height: 37px;
    max-width: 720px;
    margin: 24px auto 10px;
    color: var(--ifm-font-base-color-inverse);
    ${mq[1]} {
      font-size: 25px;
      line-height: 30px;
    }
  }
  .github-section {
    margin-top: 9px;
    ${mq[1]} {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .github-button {
      margin: 5px;
      ${mq[1]} {
        transform: scale(1.25);
        margin: 8px;
        &:first-of-type {
          margin-top: 5px;
        }
        &:last-of-type {
          margin-bottom: 5px;
        }
      }
    }
  }
`;

const StyledButton = styled(Link)`
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  width: 170px;
  padding: 10px 0;
  margin: 15px auto 0;
  ${mq[1]} {
    font-size: 19px;
    width: 175px;
    padding: 10px 0;
  }
`;

const StyledScreenshotContainer = styled('div')`
  position: relative;
  display: inline-block;
  padding-top: 30px;
  margin-top: 25px;
  margin-bottom: -125px;
  max-width: 800px;
  ${mq[1]} {
    padding-top: 20px;
  }
  .screenshot {
    position: relative;
    z-index: 3;
    border-radius: 10px;
  }
  .screenshot-shadow-1 {
    position: absolute;
    top: 15px;
    left: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 15px);
    background-color: #256b7c;
    border-radius: 10px;
    z-index: 2;
    ${mq[1]} {
      background-color: #335a64;
      top: 10px;
      left: 15px;
      width: calc(100% - 30px);
      height: calc(100% - 10px);
    }
  }
  .screenshot-shadow-2 {
    position: absolute;
    top: 0;
    left: 40px;
    width: calc(100% - 80px);
    height: 100%;
    background-color: #0d5262;
    border-radius: 10px;
    z-index: 1;
    ${mq[1]} {
      background-color: #1f4048;
      left: 30px;
      width: calc(100% - 60px);
    }
  }
  .screenshotBlur {
    display: none;
    background-color: #173036;
    filter: blur(45px);
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;
    transform: translate3d(-50%, 0, 0);
    opacity: 0.3;
    ${mq[1]} {
      display: block;
    }
  }
`;

const StyledFeaturesList = styled('ul')`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 1170px;
  margin: 15px auto 0;
  padding: 0 20px;
  ${mq[1]} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .item {
    text-align: left;
    border: 1px solid var(--ifm-border-color);
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    padding: 20px;
    ${mq[1]} {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 35px;
    }
    .image {
      flex-shrink: 0;
      margin-right: 20px;
      width: 140px;
      text-align: center;
      ${mq[1]} {
        width: 115px;
      }
    }
    .title {
      font-size: 24px;
      color: var(--ifm-primary-text);
      margin: 10px 0 0;
      ${mq[1]} {
        font-size: 23px;
        margin-top: 20px;
      }
    }
    .description {
      font-size: 17px;
      line-height: 23px;
      color: var(--ifm-secondary-text);
      margin: 5px 0 0;
      ${mq[1]} {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
`;

const StyledSliderSection = styled('div')`
  position: relative;
  padding: 60px 20px;
  ${mq[1]} {
    padding-top: 0;
    padding-bottom: 50px;
  }
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: calc(100% - 320px);
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('/img/grid-background.jpg');
    background-size: cover;
    z-index: -1;
    ${mq[1]} {
      height: 100%;
    }
  }
  .toggleBtns {
    display: flex;
    justify-content: space-between;
    list-style: none;
    max-width: 870px;
    width: 100%;
    margin: 0 auto 20px;
    padding: 0;
    ${mq[1]} {
      flex-direction: column;
      text-align: left;
      max-width: 140px;
      gap: 10px;
      margin-top: 15px;
      margin-bottom: 40px;
    }
    .toggle {
      font-size: 24px;
      color: #b4c0c7;
      position: relative;
      padding-left: 32px;
      cursor: pointer;
      ${mq[1]} {
        font-size: 17px;
        font-weight: bold;
        padding-left: 22px;
      }
      &::before {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #457f8d;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate3d(0, -50%, 0);
        ${mq[1]} {
          width: 8px;
          height: 8px;
        }
      }
      &.active {
        font-weight: 700;
        color: var(--ifm-font-base-color-inverse);
      }
      &.active::before {
        background-color: var(--ifm-color-primary);
      }
    }
  }
  .slide {
    max-width: 920px;
    & > p {
      max-width: 560px;
      margin: 0 auto;
      font-size: 24px;
      line-height: 32px;
      color: var(--ifm-font-base-color-inverse);
      margin-bottom: 45px;
      ${mq[1]} {
        font-size: 17px;
        line-height: 23px;
      }
    }
  }
  video {
    width: 100%;
    max-width: 920px;
    margin-top: 10px;
    border-radius: 10px;
    ${mq[1]} {
      border-radius: 5px;
    }
  }
`;

const StyledKeyFeatures = styled('div')`
  margin-top: 50px;
  & > h3 {
    font-size: 30px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
    max-width: 960px;
    margin: 30px auto 0;
    padding: 0 20px;
    text-align: left;
    ${mq[1]} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    & > .item {
      display: flex;
      font-size: 17px;
      ${mq[1]} {
        font-size: 15px;
      }
      & > img {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        margin-right: 12px;
        margin-top: 4px;
        ${mq[1]} {
          width: 18px;
          height: 18px;
          margin-top: 2px;
        }
      }
    }
  }
  .row {
    display: flex;
    max-width: 960px;
    margin: 30px auto 0;
    & > .column {
      width: 50%;
      & > ul {
        font-size: 17px;
        list-style: none;
        padding: 0 20px;
        text-align: left;
        margin: 0;
        & > li {
          display: flex;
          margin-bottom: 20px;
          & > img {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            margin-right: 12px;
            margin-top: 4px;
          }
        }
      }
    }
  }
`;

const StyledIntegrations = styled('div')`
  padding: 0 20px;
  .database-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 14px;
    max-width: 1160px;
    margin: 25px auto 0;
    ${mq[1]} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    ${mq[0]} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    & > .item {
      border: 1px solid var(--ifm-border-color);
      border-radius: 10px;
      overflow: hidden;
      height: 120px;
      padding: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > a {
        height: 100%;
      }
      & img {
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .database-sub {
    display: block;
    text-align: center;
    font-size: 17px;
    margin-top: 50px;
  }
`;

export default function Home(): JSX.Element {
  const slider = useRef(null);

  const [slideIndex, setSlideIndex] = useState(0);

  const onChange = (current, next) => {
    setSlideIndex(next);
  };

  const changeToDark = () => {
    const navbar = document.body.querySelector('.navbar');
    const logo = document.body.querySelector('.navbar__logo img');
    navbar.classList.add('navbar--dark');
    logo.setAttribute('src', '/img/superset-logo-horiz-dark.svg');
  };

  const changeToLight = () => {
    const navbar = document.body.querySelector('.navbar');
    const logo = document.body.querySelector('.navbar__logo img');
    navbar.classList.remove('navbar--dark');
    logo.setAttribute('src', '/img/superset-logo-horiz.svg');
  };

  // Set up dark <-> light navbar change
  useEffect(() => {
    changeToDark();

    const navbarToggle = document.body.querySelector('.navbar__toggle');
    navbarToggle.addEventListener('click', () => changeToLight());

    const scrollListener = () => {
      if (window.scrollY > 0) {
        changeToLight();
      } else {
        changeToDark();
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
      changeToLight();
    };
  }, []);

  return (
    <Layout
      title="Welcome"
      description="Community website for Apache Superset™, a data visualization and data exploration platform"
      wrapperClassName="under-navbar"
    >
      <StyledMain>
        <StyledTitleContainer>
            <img className="logo-horiz" src="img/a2i-Logo-set.png" alt="logo-horiz" />
            {/* <div className="info-text"> */}
              {/* Apache Superset is a modern data exploration and visualization
              platform */}
              Data Leadership
            {/* </div> */}
            {/* <div className="github-section">
              <span className="github-button">
                <GitHubButton
                  // href="https://github.com/apache/superset"
                  href="https://github.com/a2i-data-team/data-leadership"
                  data-size="large"
                  // data-show-count="true"
                  // aria-label="Star apache/superset on GitHub"
                >
                  Github -Data Leadership
                </GitHubButton>
              </span> */}
              {/* <span className="github-button">
                <GitHubButton
                  href="https://github.com/apache/superset/subscription"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Watch apache/superset on GitHub"
                >
                  Watch
                </GitHubButton>
              </span>
              <span className="github-button">
                <GitHubButton
                  href="https://github.com/apache/superset/fork"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Fork apache/superset on GitHub"
                >
                  Fork
                </GitHubButton>
              </span> */}
            {/* </div> */}
            
        </StyledTitleContainer>

        <StyledFeatures>
            <StyledHeading>Data Leadership Overview.</StyledHeading>
            
            <div className="info-text info-text-smaller">
            Aspire to Innovate (a2i) has launched “Data Leadership” initiative under the 
            supervision of the Cabinet Division and the Information & Communication Technology (ICT) Division, 
            Bangladesh. The approach was a holistic one, ensuring inclusion across the whole of government.  

              {/* <Link to="https://drive.google.com/file/d/1DqpFmb7IQQiDAvKnA88IdttbQVfGSoFU/view?usp=drive_link">
                <Button type="primary">
                  DL Journey
                </Button>
              </Link> */}
            </div> 

            <iframe
            title="Data Leadership Journey"
            width="560"
            height="315"
            src="https://drive.google.com/file/d/1DqpFmb7IQQiDAvKnA88IdttbQVfGSoFU/preview"
            frameBorder="0"
            allowFullScreen={true}
          />
            {/* <br />
            <span className="github-button">
                <GitHubButton
                  // href="https://github.com/apache/superset"
                  href="https://github.com/a2i-data-team/data-leadership"
                  data-size="large"
                  // data-show-count="true"
                  // aria-label="Star apache/superset on GitHub"
                >
                  Github -Data Leadership
                </GitHubButton>
              </span> */}

            {/* <ul className="featureList ant-row">
              <Row>
                <Col sm={24} md={12}>
                  <Feature
                    icon={<FireOutlined className="warning-color" />}
                    
                    title="Powerful yet easy to use"
                    descr={`
                    Quickly and easily integrate and explore your data, using
                    either our simple no-code viz builder or state of the art SQL
                    IDE.
                  `}
                  />
                </Col>

                <Col sm={24} md={12}>
                  <Feature
                    icon={<DatabaseOutlined className="info-color" />}
                    title="Integrates with modern databases"
                    descr={`
                    Superset can connect to any SQL based datasource
                    through SQLAlchemy, including modern cloud native databases
                    and engines at petabyte scale.
                  `}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={24} md={12}>
                  <Feature
                    icon={<DeploymentUnitOutlined className="success-color" />}
                    title="Modern architecture"
                    descr={`
                    Superset is lightweight and highly scalable, leveraging the
                    power of your existing data infrastructure without requiring
                    yet another ingestion layer.
                  `}
                  />
                </Col>
                <Col sm={24} md={12}>
                  <Feature
                    icon={<DotChartOutlined className="alert-color" />}
                    title="Rich visualizations and dashboards"
                    descr={`
                    Superset ships with a wide array of beautiful visualizations.
                    Our visualization plug-in architecture makes it easy to build
                    custom visualizations that drop directly into Superset.
                  `}
                  />
                </Col>
              </Row>
            </ul> */}
            
        </StyledFeatures>
        
        <StyledFeatures>
            {/* <StyledHeading>Superset Overview</StyledHeading> */}
            {/* <div className="info-text info-text-smaller">
              Superset is fast, lightweight, intuitive, and loaded with options
              that make it easy for users of all skill sets to explore and
              visualize their data, from simple line charts to highly detailed
              geospatial charts.
            </div>
            <ul className="featureList ant-row">
              <Row>
                <Col sm={24} md={12}>
                  <Feature
                    icon={<FireOutlined className="warning-color" />}
                    title="Powerful yet easy to use"
                    descr={`
                    Quickly and easily integrate and explore your data, using
                    either our simple no-code viz builder or state of the art SQL
                    IDE.
                  `}
                  />
                </Col>

                <Col sm={24} md={12}>
                  <Feature
                    icon={<DatabaseOutlined className="info-color" />}
                    title="Integrates with modern databases"
                    descr={`
                    Superset can connect to any SQL based datasource
                    through SQLAlchemy, including modern cloud native databases
                    and engines at petabyte scale.
                  `}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={24} md={12}>
                  <Feature
                    icon={<DeploymentUnitOutlined className="success-color" />}
                    title="Modern architecture"
                    descr={`
                    Superset is lightweight and highly scalable, leveraging the
                    power of your existing data infrastructure without requiring
                    yet another ingestion layer.
                  `}
                  />
                </Col>
                <Col sm={24} md={12}>
                  <Feature
                    icon={<DotChartOutlined className="alert-color" />}
                    title="Rich visualizations and dashboards"
                    descr={`
                    Superset ships with a wide array of beautiful visualizations.
                    Our visualization plug-in architecture makes it easy to build
                    custom visualizations that drop directly into Superset.
                  `}
                  />
                </Col>
              </Row>
            </ul> */}
        </StyledFeatures>

        {/* <CarouselSection>
            <StyledHeading>Explore</StyledHeading>
            <div className="toggleContainer">
              <div className="toggleBtns">
                <div
                  className={`toggle ${slideIndex === 0 ? 'active' : null}`}
                  onClick={() => slider.current.goTo(0)}
                  role="button"
                >
                  <h2>Explore</h2>
                  <span>
                    Explore your data using the array of data visualizations.
                  </span>
                </div>

                <div
                  className={`toggle ${slideIndex === 1 ? 'active' : null}`}
                  onClick={() => slider.current.goTo(1)}
                  role="button"
                >
                  <h2>View</h2>
                  <span>View your data through interactive dashboards</span>
                </div>
                <div
                  className={`toggle ${slideIndex === 2 ? 'active' : null}`}
                  onClick={() => slider.current.goTo(2)}
                  role="button"
                >
                  <h2>Investigate</h2>
                  <span>Use SQL Lab to write queries to explore your data</span>
                </div>
              </div>
              <div className="item">
                <img src="/img/check-icon.svg" alt="check-icon" />
                <div>
                  <strong>Cross-filters, drill-to-detail, and drill-by</strong>{' '}
                  features for deeper data analysis
                </div>
              </div>
              <div className="item">
                <img src="/img/check-icon.svg" alt="check-icon" />
                <div>
                  <strong>Virtual datasets</strong> for ad-hoc data exploration
                </div>
              </div>
              <div className="item">
                <img src="/img/check-icon.svg" alt="check-icon" />
                <div>
                  Access to new functionalities through{' '}
                  <strong>feature flags</strong>
                </div>
              </div>
            </div>
            <StyledIntegrations>
              <StyledHeading>Supported Databases</StyledHeading>

              <ul className="database-list">
                {Databases.map(
                  ({
                    title, imgName: imageName, width, height,
                  }) => (
                    <li>
                      <StyledDatabaseImg src={`img/databases/${imageName}`} title={title} width={width || 'auto'} height={height || '50px'}/>
                    </li>
                  ),
                )}
              </ul>
              <span className="databaseSub">
                ... and many other
                <a href="docs/databases/installing-database-drivers">
                  {' '}
                  compatible databases
                  {' '}
                </a>
              </span>
            </StyledIntegrations>
        </CarouselSection> */}
      </StyledMain>
      {/* <StyledCredits>
        We use{' '}
        <a href="https://applitools.com/" target="_blank" rel="nofollow">
          <img src="img/applitools.png" title="Applitools" />
        </a>
      </StyledCredits> */}
    </Layout>
  );
}
