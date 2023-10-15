import {forwardRef, useMemo} from 'react';
import type * as React from 'react';
import {isNil} from 'remeda';
import {collapse} from '@growthops/ext-ts';

type Variant = 'primary' | 'secondary';

type IconAlignment = 'left' | 'right';

type Icon = {
  svg: React.ElementType;
  alignment?: IconAlignment;
  className?: string;
};

type BaseButtonProperties = {
  label: string;
  className?: string;
  variant?: Variant;
  icon?: Icon;
};

type SemanticButtonProperties = BaseButtonProperties &
  React.ComponentPropsWithoutRef<'button'>;

type LinkButtonProperties = BaseButtonProperties &
  React.ComponentPropsWithoutRef<'a'>;

const baseClasses = collapse(`
	inline-flex
	items-center
	!leading-none
	py-4
	px-8
	space-x-2
	rounded-md
	text-sm
	font-semibold
	w-full
	md:w-auto
	justify-center
	transition
	disabled:bg-gray-100
	disabled:pointer-events-none
	disabled:text-neutral-500
`);

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand-gold text-black',
  secondary: 'bg-brand-silver text-black',
};

const generateIcon = (
  icon: Icon | undefined,
  alignment: IconAlignment,
  classes: string,
  alignmentAdjustmentClasses: string
): JSX.Element | undefined => {
  if (!isNil(icon) && (icon.alignment ?? 'left') === alignment) {
    return (
      <icon.svg className={collapse([classes, alignmentAdjustmentClasses])} />
    );
  }
};

const useClasses = (
  variant: Variant,
  className: string | undefined,
  icon: Icon | undefined
): Record<string, string> =>
  useMemo(
    () => ({
      root: collapse([baseClasses, variantClasses[variant], className ?? '']),
      icon: collapse(['w-5', icon?.className ?? '']),
    }),
    [variant, className, icon?.className]
  );

const useIcons = (
  icon: Icon | undefined,
  classes: string
): Record<string, JSX.Element | undefined> =>
  useMemo(
    () => ({
      left: generateIcon(icon, 'left', classes, '-ml-2'), // -ml-* here to visually weight the icon appropriately.
      right: generateIcon(icon, 'right', classes, '!-mr-2'), // !-mr-* here to visually weight the icon appropriately.
    }),
    [icon, classes]
  );

const Semantic = ({
  label,
  variant = 'primary',
  className,
  icon,
  ...intrinsicButtonProperties
}: SemanticButtonProperties): JSX.Element => {
  const classes = useClasses(variant, className, icon);
  const icons = useIcons(icon, classes.icon);

  return (
    <button
      className={classes.root}
      type="button"
      {...intrinsicButtonProperties}
    >
      {icons.left}
      <span>{label}</span>
      {icons.right}
    </button>
  );
};

const Link = forwardRef<HTMLAnchorElement, LinkButtonProperties>(
  (
    {
      label,
      variant = 'primary',
      className,
      icon,
      ...intrinsicAnchorProperties
    }: LinkButtonProperties,
    reference
  ): JSX.Element => {
    const classes = useClasses(variant, className, icon);
    const icons = useIcons(icon, classes.icon);

    return (
      <a
        ref={reference}
        className={classes.root}
        {...intrinsicAnchorProperties}
        rel="noreferrer"
      >
        {icons.left}
        <span>{label}</span>
        {icons.right}
      </a>
    );
  }
);

Link.displayName = 'Link';

const Button = {
  Semantic,
  Link,
};

export default Button;

export type {
  Variant,
  IconAlignment,
  Icon,
  BaseButtonProperties as BaseButtonProps,
  SemanticButtonProperties as SemanticButtonProps,
  LinkButtonProperties as LinkButtonProps,
};
