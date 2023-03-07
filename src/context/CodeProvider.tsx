import { createContext, useContext, useState } from "react";
import { Alert } from "react-native";
import { CodeError } from "../global/codeError";
import { errors } from "../utils/codes";

interface ICodeContextProviderProps {
  children: React.ReactNode;
}

interface ICodeContextType {
  code: CodeError;
  handleCode: (code: string) => void;
}

const CodeContext = createContext({} as ICodeContextType);
const useCode = () => useContext(CodeContext);

const CodeContextProvider: React.FC<ICodeContextProviderProps> = ({
  children,
}) => {
  const [code, setCode] = useState({} as CodeError);

  const handleCode = (code: string) => {
    if (!code) {
      return;
    }

    const error = errors.find(({ error }) => {
      return error.code === code;
    });

    if (!error) {
      Alert.alert("Código não encontrado");
      setCode({
        id: "0",
        error: {
          code: "0",
          message: "Código não encontrado",
        },
      });
      return;
    }

    setCode(error);
  };

  return (
    <CodeContext.Provider value={{ handleCode, code }}>
      {children}
    </CodeContext.Provider>
  );
};

export { useCode, CodeContext, CodeContextProvider };
