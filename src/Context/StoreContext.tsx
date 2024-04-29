import {
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface storeContextTypeContext {
  rightContainer: RefObject<HTMLDivElement>;
  setRightContainer: Dispatch<RefObject<HTMLDivElement>>;
  leftContainer: RefObject<HTMLDivElement>;
  setLeftContainer: Dispatch<RefObject<HTMLDivElement>>;
}

export const storeContext = createContext<storeContextTypeContext>({

  rightContainer: { current: null },
  setRightContainer: () => {}, 
  leftContainer: { current: null },
  setLeftContainer: () => {} 
});

export const DataProvider = (props: { children: ReactNode }) => {
  const [rightContainer, setRightContainer] = useState<RefObject<HTMLDivElement>>({ current: null });
  const [leftContainer, setLeftContainer] = useState<RefObject<HTMLDivElement>>({ current: null });
  return (
    <storeContext.Provider
      value={{
        rightContainer,
        setRightContainer,
        leftContainer,
        setLeftContainer
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
};