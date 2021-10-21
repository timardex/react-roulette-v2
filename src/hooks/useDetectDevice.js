import { useEffect, useState } from "react";

const useDetectDevice = () => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isAndroid = () => userAgent.match(/Android/i);
  const isIos = () => userAgent.match(/iPhone|iPad|iPod/i);
  const isOpera = () => userAgent.match(/Opera Mini/i);
  const isWindows = () => userAgent.match(/IEMobile/i);
  const isSSR = () => userAgent.match(/SSR/i);

  const isMobile = isAndroid() || isIos() || isOpera() || isWindows();
  const isDesktop = !isMobile && !isSSR();

  const [checkDesktop, setCheckDesktop] = useState(isDesktop);

  useEffect(() => {
    setCheckDesktop(isDesktop);
  }, [isDesktop])

  return [checkDesktop];
};

export default useDetectDevice;
