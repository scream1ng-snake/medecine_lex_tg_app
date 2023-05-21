const tg = window.Telegram.WebApp;

export default function useTelega() {
  function onClose() {
    tg.close();
  }
  function onToggleButton() {
    if(tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }
  return {
    tg,
    onClose,
    onToggleButton,
    user: tg.initDataunsafe?.user
  }
}