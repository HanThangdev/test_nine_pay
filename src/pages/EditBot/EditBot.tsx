import classNames from 'classnames';
import Header from '@/components/header';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { setDataWhenUpdate } from '@/states/buildChatBot/buildChatBot.slice';
import { AppDispatch } from '@/states/store';
import { useDispatch } from 'react-redux';
import IconModal from '@/components/IconModal/IconModal';
import IconEditing from '@/components/IconEditing/IconEditing';
import { Tabs, TabsProps, Switch } from 'antd';
import BasicInfor from './BasicInfor';
import Config from './Config';
import Prompt from './Prompt';
import ImportData from './ImportData';
import ChatWidget from './AdvanceSetting/ChatWidget';
import Styling from './AdvanceSetting/Styling';

const EditBot = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { data, onGetInfoCurrentBot, onGetIncludesSource } = useBuildChatbot();
  const { id } = useParams();
  const [save, setSave] = useState(false);
  const items: TabsProps['items'] = [
    {
      key: 'basicInfor',
      label: `${t('BasicInfor')}`,
      children: <BasicInfor save={save} saveSuccess={() => setSave(false)} />,
    },
    {
      key: 'config',
      label: `${t('ChatbotConfig')}`,
      children: <Config />,
    },
    {
      key: 'Prompt',
      label: `${t('Prompt')}`,
      children: <Prompt />,
    },
    {
      key: 'importData',
      label: `${t('ImportData')}`,
      children: <ImportData />,
    },
    {
      key: 'setting',
      label: `${t('AdvancedSetting')}`,
      children: <ChatWidget />,
    },
    {
      key: 'styling',
      label: `${t('Styling')}`,
      children: <Styling />,
    },
    {
      key: 'integration',
      label: `${t('Integrations')}`,
      children: <p>sss</p>,
    },
  ];
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const obj: any = {};

    for (const [key, value] of urlParams) {
      obj[key] = value;
    }

    dispatch(setDataWhenUpdate(obj));
    if (id) {
      onGetInfoCurrentBot({ bot_id: id })
        .then(() => {
          onGetIncludesSource({ bot_id: id });
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
  }, []);

  return (
    <>
      <Header
        children={
          <>
            <div className="flex items-center gap-x-3">
              <p className="mb-0 text-[#1F2937] font-medium">
                {data?.bot_name} <br />
                <span className="flex items-center gap-x-1 text-[#D70] text-[12px]">
                  <IconEditing />
                  {t('editting')}
                </span>
              </p>
            </div>
          </>
        }
      />
      <div className="p-[20px] edit-bot">
        <div className="w-full flex justify-between bg-[#FCFCFC] rounded-[12px] py-[12px] px-[16px]">
          <div>
            <p className="mb-2 text-[20px] text-[#111827]">{data?.bot_name}</p>
            <p className="text-[#6B7280] mb-2">
              {t('Limit', { ns: 'config_bot' })}
            </p>
            <p className="rounded-lg p-[10px] bg-[#DEF5E8] items-center text-[14px] w-fit border-[1px] border-[#6FCF97] text-[#27AE60] flex gap-x-2">
              <IconModal />
              {data?.gpt_model_name}
            </p>
          </div>
          <div className="Switch-bot min-w-[225px] h-full gap-x-4 rounded-[8px] py-2 px-3 flex">
            <Switch size="small" className="mt-[4px]" />
            <p className="mb-0 text-[14px]">
              <span className="text-[#344054] font-medium">
                {t('Active', { ns: 'manage_bot' })}
              </span>
              <br />
              {t('inactive', { ns: 'manage_bot' })}
            </p>
          </div>
        </div>
        <div className="mt-[16px] w-full min-h-[calc(100vh-357px)] mb-[65px] bg-[#FCFCFC] rounded-[12px] py-[12px] px-[16px]">
          <Tabs
            id="Chatbot-Tabs"
            defaultActiveKey="overview"
            items={items}
            // activeKey={activeKey}
            // onChange={onChange}
            className={classNames('Tabs-bot flex-auto flex', 'box-border')}
          />
        </div>
      </div>
      <div className="fixed bottom-0 w-[calc(100%-240px)] z-999 py-[9px] px-[20px] bg-[#FCFCFC] border-t-[1px] border-[#D1D5DB] flex justify-between">
        <p
          className="mb-0 border-[1px] text-[#344054] py-[10px] px-4 rounded-lg font-semibold cursor-pointer"
          onClick={() => navigate(`/`)}
        >
          {t('Exit')}
        </p>
        <button
          onClick={() => setSave(true)}
          className="bg-[#2D3FE7] py-[10px] px-4 rounded-lg text-white"
        >
          {t('Update', { ns: 'config_bot' })}
        </button>
      </div>
    </>
  );
};

export default EditBot;
