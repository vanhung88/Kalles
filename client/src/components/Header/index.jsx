import React, { useEffect, useRef } from "react";
import Logo from "../../assets/icons/logo.svg";
import * as S from "./style";
import {
  SearchNormal1,
  ArrowDown2,
  User,
  ShoppingCart,
  Pointer,
} from "iconsax-react";
import { keyframes } from "styled-components";

const Header = () => {
  const HEADER_ELEMENT = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        HEADER_ELEMENT.current.style.transform = "translateY(0px)";
        HEADER_ELEMENT.current.style.position = "fixed";
        HEADER_ELEMENT.current.style.transition = "0.5s";
      } else {
        HEADER_ELEMENT.current.style.transform = "translateY(-100px)";
        HEADER_ELEMENT.current.style.transition = "0s";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <S.Header
        style={{ transform: "translateY(-100px)", position: "absolute" }}
        ref={HEADER_ELEMENT}
      >
        <S.Wrapper>
          <S.H_Left xl={8}>
            <S.H_text>
              SHOP
              <ArrowDown2 size="15" />
            </S.H_text>
            <S.H_text>
              PRODUCT <ArrowDown2 size="15" />
            </S.H_text>
            <S.H_text>
              SALE <ArrowDown2 size="15" />
            </S.H_text>
            <S.H_text>
              BLOG <ArrowDown2 size="15" />
            </S.H_text>
          </S.H_Left>
          <S.H_Mid xl={8}>
            <S.H_Logo src={Logo} />
          </S.H_Mid>
          <S.H_Right xl={8}>
            <SearchNormal1
              style={{ marginRight: 15, cursor: "pointer" }}
              size="22"
            />
            <User size="22" style={{ marginRight: 15, cursor: "pointer" }} />
            <ShoppingCart size="22" style={{ cursor: "pointer" }} />
          </S.H_Right>
        </S.Wrapper>
      </S.Header>

      {/* header main */}
      <S.Header>
        <S.Wrapper>
          <S.H_Left xl={8}>
            <S.H_text>
              SHOP <ArrowDown2 size="15" />
            </S.H_text>
            <S.H_text>
              PRODUCT <ArrowDown2 size="15" />
            </S.H_text>
            <S.H_text>
              SALE <ArrowDown2 size="15" />
            </S.H_text>
            <S.H_text>
              BLOG <ArrowDown2 size="15" />
            </S.H_text>
          </S.H_Left>
          <S.H_Mid xl={8}>
            <S.H_Logo src={Logo} />
          </S.H_Mid>
          <S.H_Right xl={8}>
            <SearchNormal1
              style={{ marginRight: 15, cursor: "pointer" }}
              size="22"
            />
            <User size="22" style={{ marginRight: 15, cursor: "pointer" }} />
            <ShoppingCart size="22" style={{ cursor: "pointer" }} />
          </S.H_Right>
        </S.Wrapper>
      </S.Header>
    </>
  );
};

export default Header;
