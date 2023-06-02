import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";

import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { createStore } from "polotno/model/store";
import { setTranslations } from 'polotno/config';

setTranslations({
  sidePanel: {
    text: 'متن',
    upload: 'آپلود',
    background: 'پس زمینه',
    layers: 'لایه ها',
    elements: 'اشکال',
    photos: 'عکس ها',
    templates: 'قالب ها',
    resize: 'تغییر اندازه',
    searchPlaceholder: 'جست‌ و‌ جو',
    searchTemplatesWithSameSize: 'نمایش قالب ها با اندازه یکسان',
    uploadFont: 'آپلود فونت',
    myFonts: 'فونت های من',
    headerText: 'متن عنوان',
    createHeader: 'ساخت عنوان',
    subHeaderText: 'عنوان فرعی',
    createSubHeader: 'ساخت عنوان فرعی',
    bodyText: 'متن بدنه',
    createBody: 'ساخت متن بدنه',
    upload: 'آپلود',
    uploadImage: 'آپلود عکس',
    uploadTip: '',
    noResults: 'هیچ عکسی آپلود نشده',
    width: 'عرض',
    height: 'ارتفاع',
    useMagicResize: 'استفاده از تغییر اندازه جادویی',
    magicResizeDescription: 'تغییر اندازه جادویی به طور خودکار اندازه را تغییر می دهد و عناصر را روی بوم حرکت می دهد',
    layersTip: 'المان های فعال در صفحه:',
    noLayers: 'هیچ المانی در صفحه وجود ندارد'
  },
  workspace: {
      // noPages: '',
      addPage: 'اضافه کردن صفحه',
      removePage: 'حذف کردن صفحه',
      duplicatePage: 'کپی صفحه',
      // moveUp: ''
      // moveDown: string;
  },
  toolbar: {
    position: 'موقعیت',
    download: 'دانلود'

  }
});
const store = createStore({
  key: "1YowbX1r9_-EABkMH0Jx", // you can create it here: https://polotno.com/cabinet/
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true
});
const page = store.addPage();

export const Editor = () => {  
  return (
    <>
      <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
        <SidePanelWrap>
          <SidePanel store={store} />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} downloadButtonEnabled />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </>
  );
};

export default Editor;
