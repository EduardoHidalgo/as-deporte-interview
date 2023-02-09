import Image from "next/image";
import { FC } from "react";

interface Props {}

export const Header: FC<Props> = ({}) => {
  return (
    <header className="header">
      <Image
        className="header__logo"
        alt="logo"
        src={"/logo.png"}
        width={1000}
        height={600}
        priority
      />
      <h1 className="header__title">
        Entrenamiento, nutrición, historias motivacionales y más contenido de
        video para corredores
      </h1>
    </header>
  );
};
