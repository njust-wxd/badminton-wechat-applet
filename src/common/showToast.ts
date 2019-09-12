export default function (title: string, duration: number = 1500, mask: boolean = false, icon: any = 'none') {
  return new Promise((resolve) => {
    uni.showToast({
      title,
      duration,
      mask,
      icon,
      success: () => {
        resolve();
      },
    });
  });
}
