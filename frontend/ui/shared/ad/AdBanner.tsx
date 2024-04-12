import { chakra } from '@chakra-ui/react';

const AdBanner = () => {
  return null;
  // const provider = useAppContext().adBannerProvider;

  // const hasAdblockCookie = cookies.get(cookies.NAMES.ADBLOCK_DETECTED, useAppContext().cookies);

  // if (!feature.isEnabled || hasAdblockCookie || !provider) {
  //   return null;
  // }

  // const content = (() => {
  //   switch (provider) {
  //     case 'adbutler':
  //       return <AdbutlerBanner/>;
  //     case 'coinzilla':
  //       return <CoinzillaBanner/>;
  //     case 'getit':
  //       return <GetitBanner/>;
  //     case 'hype':
  //       return <HypeBanner/>;
  //     case 'slise':
  //       return <SliseBanner/>;
  //   }
  // })();

  // return (
  //   <Skeleton
  //     className={ className }
  //     isLoaded={ !isLoading }
  //     borderRadius="none"
  //     maxW={ ('adButler' in feature && feature.adButler) ? feature.adButler.config.desktop.width : '728px' }
  //     w="100%"
  //   >
  //     { content }
  //   </Skeleton>
  // );
};

export default chakra(AdBanner);
