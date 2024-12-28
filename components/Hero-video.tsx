import HeroVideoDialog from "./ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/damr9jzpb/video/upload/v1735386660/852292-hd_1152_720_25fps_swt8or.mp4"
        thumbnailSrc="https://res.cloudinary.com/damr9jzpb/image/upload/v1735386810/Screenshot_from_2024-12-28_17-22-30_vzlflc.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/damr9jzpb/video/upload/v1735386660/852292-hd_1152_720_25fps_swt8or.mp4"
        thumbnailSrc="https://res.cloudinary.com/damr9jzpb/image/upload/v1735386810/Screenshot_from_2024-12-28_17-22-30_vzlflc.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
