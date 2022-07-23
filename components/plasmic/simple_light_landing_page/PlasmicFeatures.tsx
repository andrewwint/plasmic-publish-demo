// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aLKvKGtnuwFktJbBPQFdUg
// Component: CBraow9lpIQY7p
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: _as5-aYGjjau0/component
import Section from "../../Section"; // plasmic-import: kdplkNbJAP6Zc1/component
import Bullet from "../../Bullet"; // plasmic-import: zxwgo7XptGRyTr/component
import Button from "../../Button"; // plasmic-import: SODxBFQllTMXMm/component
import HomeCta from "../../HomeCta"; // plasmic-import: rwan4Zifc1I2b/component
import Footer from "../../Footer"; // plasmic-import: 3G0ls7B2SbUFV/component

import { useScreenVariants as useScreenVariantsfr0Uo0MhNbavNm } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Fr0uo0mhNBAVNm/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: aLKvKGtnuwFktJbBPQFdUg/projectcss
import sty from "./PlasmicFeatures.module.css"; // plasmic-import: CBraow9lpIQY7p/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: VzqRoH-0ot120a/icon

export type PlasmicFeatures__VariantMembers = {};

export type PlasmicFeatures__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeatures__VariantsArgs;
export const PlasmicFeatures__VariantProps = new Array<VariantPropType>();

export type PlasmicFeatures__ArgsType = {};
type ArgPropType = keyof PlasmicFeatures__ArgsType;
export const PlasmicFeatures__ArgProps = new Array<ArgPropType>();

export type PlasmicFeatures__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  section?: p.Flex<typeof Section>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultFeaturesProps {}

function PlasmicFeatures__RenderFunc(props: {
  variants: PlasmicFeatures__VariantsArgs;
  args: PlasmicFeatures__ArgsType;
  overrides: PlasmicFeatures__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfr0Uo0MhNbavNm()
  });

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames("__wab_instance", sty.section)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"The ultimate in feature set."}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__le4Ge)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns___4RoqR)}
              >
                <div className={classNames(projectcss.all, sty.column__zLQz)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__euoka)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yFxVz
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gG251
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__aqz9M
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__jqPBw
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___9HUhW
                      )}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dR3Qo
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__beCl3)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___8U2NE
                        )}
                        color={"blue" as const}
                      >
                        {"Start free trial"}
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__knOKh
                        )}
                        color={"outlineBlue" as const}
                      >
                        {"View demo"}
                      </Button>
                    </p.Stack>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column__hP4I)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__bBkL3)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    src={{
                      src: "/plasmic/simple_light_landing_page/images/simpleProject.png",
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__vNkcY)}
              >
                <div className={classNames(projectcss.all, sty.column___56Ata)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__yVpR)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    src={{
                      src: "/plasmic/simple_light_landing_page/images/simpleProject.png",
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined
                    }}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__dnPxg)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__xkWk)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lelL1
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__wRvPy
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__zz3Rh
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__i5Ktt
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__jy47A
                      )}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___2Doz
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__gmkJ7)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__lxk10
                        )}
                        color={"blue" as const}
                      >
                        {"Start free trial"}
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__wYhQf
                        )}
                        color={"outlineBlue" as const}
                      >
                        {"View demo"}
                      </Button>
                    </p.Stack>
                  </p.Stack>
                </div>
              </p.Stack>
            </p.Stack>
          </Section>

          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "homeCta", "footer"],
  header: ["header"],
  section: ["section"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  section: typeof Section;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeatures__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeatures__VariantsArgs;
    args?: PlasmicFeatures__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFeatures__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFeatures__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFeatures__ArgProps,
          internalVariantPropNames: PlasmicFeatures__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFeatures__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatures";
  } else {
    func.displayName = `PlasmicFeatures.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatures = Object.assign(
  // Top-level PlasmicFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicFeatures
    internalVariantProps: PlasmicFeatures__VariantProps,
    internalArgProps: PlasmicFeatures__ArgProps
  }
);

export default PlasmicFeatures;
/* prettier-ignore-end */
