'use client';

import {useState, useContext, useCallback, useMemo, createContext} from 'react';
import {reject, equals} from 'remeda';
import {MinusIcon, PlusIcon} from '@heroicons/react/24/solid';
import {collapse} from '@growthops/ext-ts';

type ContainerContext = {
  toggleActivePanel?: (label: string) => void;
  activePanels: string[];
};

type ExpandMode = 'multiple' | 'single';

type ContainerProperties = {
  expandMode?: ExpandMode;
  children: JSX.Element[];
};

type PanelProperties = {
  children: JSX.Element | JSX.Element[];
  label: string;
};

const containerContext = createContext<ContainerContext>({
  activePanels: [],
});

const Container = ({
  children,
  expandMode = 'single',
}: ContainerProperties): JSX.Element => {
  const [activePanels, setActivePanels] = useState<string[]>([]);

  const toggleActivePanel = useCallback(
    (label: string) => {
      if (expandMode === 'single') {
        setActivePanels(activePanels.includes(label) ? [] : [label]);
      }

      if (expandMode === 'multiple') {
        setActivePanels(
          activePanels.includes(label)
            ? reject(activePanels, equals(label))
            : [...activePanels, label]
        );
      }
    },
    [activePanels, expandMode]
  );

  const context = useMemo(
    () => ({
      toggleActivePanel,
      activePanels,
    }),
    [toggleActivePanel, activePanels]
  );

  return (
    <section className="space-y-4">
      <containerContext.Provider value={context}>
        {children}
      </containerContext.Provider>
    </section>
  );
};

const panelButtonClasses = `
	flex
	w-full
	items-center
	justify-between
	flex-grow
	text-left
	font-semibold
	p-4
	md:py-6
	rounded-t-lg
	transition
	hover:underline
  transition-colors
`;

const Panel = ({children, label}: PanelProperties): JSX.Element => {
  const {toggleActivePanel, activePanels} = useContext(containerContext);

  const handleTogglePanel = useCallback(() => {
    toggleActivePanel?.(label);
  }, [toggleActivePanel, label]);

  const isActive = useMemo(
    () => activePanels.includes(label),
    [activePanels, label]
  );

  const classes = useMemo(
    () => ({
      root: `drop-shadow-lg ${
        isActive ? 'bg-brand-off-white rounded-b-lg' : ''
      }`,
      button: collapse([
        panelButtonClasses,
        isActive
          ? 'bg-brand-charcoal underline text-brand-gold'
          : 'bg-brand-off-white text-brand-charcoal rounded-b-lg',
      ]),
      triggerIcons: 'ml-4 w-5 flex-shrink-0',
    }),
    [isActive]
  );

  return (
    <article className={classes.root}>
      <header>
        <button
          key={label}
          className={classes.button}
          type="button"
          onClick={handleTogglePanel}
        >
          <span>{label}</span>
          {isActive && <MinusIcon className={classes.triggerIcons} />}
          {!isActive && <PlusIcon className={classes.triggerIcons} />}
        </button>
      </header>
      {isActive && <div className="pt-4 pb-8 px-6 md:px-8">{children}</div>}
    </article>
  );
};

const Accordion = {
  Container,
  Panel,
};

export default Accordion;

export type {
  ContainerContext,
  ExpandMode,
  ContainerProperties as ContainerProps,
  PanelProperties as PanelProps,
};
