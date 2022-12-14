const PRELOADED_IMAGES: HTMLImageElement[] = [];

export const preloadImage = (images: string[]) => {
  images.forEach((el) => {
    // image 태그를 생성해준다.
    const img = new Image();
    // img 태그의 src에 주소를 넣어준다.
    img.src = el;
    // img 태그가 onload 되었을 때, 프리로드 된 이미지들을 PRELOADED_IMAGES 배열에 넣어주기
    img.onload = () => PRELOADED_IMAGES.push(img);
  });
};
