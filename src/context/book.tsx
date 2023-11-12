'use client';

import type {ReactNode} from 'react';
import {createContext, useCallback, useContext, useMemo, useState} from 'react';

type BookContextType = {
	make: string;
	pickUpLocation: string;
	dropOffLocation: string;
	pickUpDate: Date;
	dropOffDate: Date;
	handleUpdateContext: (key: keyof BookContextType, value: Date | string) => void; 
};

const initialData: BookContextType = {
	make: '',
	pickUpLocation: '',
	dropOffLocation: '',
	pickUpDate: new Date(),
	dropOffDate: new Date(),
	handleUpdateContext: () => {},
};

const bookingContext = createContext(initialData);

const useBookingContext = (): BookContextType => useContext(bookingContext);

const BookContext = ({children}: {children: ReactNode}): JSX.Element => {
	const [state, setState] = useState(initialData);

	const handleUpdateContext = useCallback((key: keyof BookContextType, value: Date | string): void => {
		setState((current) => ({...current, [key]: value}));
	}, []);
	
	const value: BookContextType = useMemo(() => ({
		...state,
		handleUpdateContext,
	}
	), [state, handleUpdateContext]);

	return (
		<bookingContext.Provider value={value}>
			{children}
		</bookingContext.Provider>
	);
};

export default BookContext;

export {
	useBookingContext,
	bookingContext,
};

export type {
	BookContextType,
};
