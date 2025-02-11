import * as React from 'react';
import { OverrideProps, OverridableTypeMap } from '@mui/types';

export interface BadgeUnstyledComponentsPropsOverrides {}

export interface BadgeUnstyledTypeMap<P = {}, D extends React.ElementType = 'span'> {
  props: P & {
    /**
     * The components used for each slot inside the Badge.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components?: {
      Root?: React.ElementType;
      Badge?: React.ElementType;
    };
    /**
     * The props used for each slot inside the Badge.
     * @default {}
     */
    componentsProps?: {
      root?: React.HTMLAttributes<HTMLSpanElement> & BadgeUnstyledComponentsPropsOverrides;
      badge?: React.HTMLAttributes<HTMLSpanElement> & BadgeUnstyledComponentsPropsOverrides;
    };
    /**
     * The content rendered within the badge.
     */
    badgeContent?: React.ReactNode;
    /**
     * The badge will be added relative to this node.
     */
    children?: React.ReactNode;
    /**
     * If `true`, the badge is invisible.
     * @default false
     */
    invisible?: boolean;
    /**
     * Max count to show.
     * @default 99
     */
    max?: number;
    /**
     * Controls whether the badge is hidden when `badgeContent` is zero.
     * @default false
     */
    showZero?: boolean;
  };
  defaultComponent: D;
}

/**
 * Utility to create component types that inherit props from BadgeUnstyled.
 */
export interface ExtendBadgeUnstyledTypeMap<M extends OverridableTypeMap> {
  props: M['props'] & BadgeUnstyledTypeMap['props'];
  defaultComponent: M['defaultComponent'];
}

type BadgeUnstyledProps<
  D extends React.ElementType = BadgeUnstyledTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<BadgeUnstyledTypeMap<P, D>, D>;

export default BadgeUnstyledProps;
