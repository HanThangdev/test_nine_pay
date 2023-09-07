import classNames from 'classnames';
import IconRobot from '@/components/IconRobot/IconRobot';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Input, Radio, Tooltip } from 'antd';
import React from 'react';
import { BiLockOpenAlt, BiLockAlt } from 'react-icons/bi';

const optionsModal = [
  { label: 'GPT - 3.5', value: 'GPT - 3.5' },
  { label: 'GPT - 3.5 - 16k', value: 'GPT - 3.5 - 16k' },
  { label: 'GPT - 4.0', value: 'GPT - 4.0', disabled: true },
];

interface Option {
  value: string;
  label: string;
}

interface BotConfigProps {
  botName: string;
  setBotName: (value: string) => void;
  caseStudy: string;
  setCaseStudy: (value: string) => void;
  model: string;
  setModel: (value: string) => void;
  visibility: string;
  setVisibility: (value: string) => void;
  options: Option[];
  isUpdate: boolean
}

const BotConfig: React.FC<BotConfigProps> = ({
  botName,
  setBotName,
  caseStudy,
  setCaseStudy,
  model,
  setModel,
  visibility,
  setVisibility,
  options,
  isUpdate
}) => {
  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[6px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
      )}
    >
      <h2 className="text-[20px] text-[#01058A] font-black flex gap-x-3">
        <IconRobot />
        Bot Configurations
      </h2>
      <div className="flex text-[15px] mt-[16px] items-center">
        <p className="w-[150px] font-bold">Name Chatbot</p>
        <Input
          disabled={isUpdate}
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
          type="text"
          placeholder=""
          className="h-[41px] w-[calc(100%-150px)] rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
      <div className="flex text-[15px] mt-[16px] items-center">
        <p className="w-[150px] flex gap-x-[10px] font-bold items-center">
          Select Casestudy
        </p>
        <select
          value={caseStudy}
          onChange={(e) => setCaseStudy(e.target.value)}
          className="h-[41px] w-[calc(100%-150px)] rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="text-[15px] mt-[16px]">
        <p className="flex gap-x-[10px] font-bold items-center">
          Model
          <Tooltip
            color="#212121"
            placement="rightTop"
            overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
            title={
              'GPT-3.5 is best for general use. It is a good balance of speed and output quality. \n GPT-3.5 turbo-16k is an upgraded version of GPT-3.5 that takes in 4x more context from your documents when generating output. \n GPT-3.5-16k: 8 message credits per message. \n GPT-3.5: 1 message credit per message.'
            }
          >
            <AiOutlineQuestionCircle size={18} color="#E77964" />
          </Tooltip>
        </p>
        <div className="mt-[13px]">
          <Radio.Group
            options={optionsModal}
            onChange={(e) => setModel(e.target.value)}
            value={model}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
      </div>
      <div className="text-[15px] mt-[16px]">
        <p className="w-[240px] flex gap-x-[10px] font-bold items-center">
          Visibility
          <Tooltip
            color="#212121"
            placement="rightTop"
            overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
            title={
              'Private: No one can access your chatbot except you (your account). \n Public: Anyone with the link can access it on ChatFly.com, and can be embedded on your website.'
            }
          >
            <AiOutlineQuestionCircle size={18} color="#E77964" />
          </Tooltip>
        </p>
        <div className="mt-[13px] flex gap-x-[30px]">
          <button
            onClick={() => setVisibility('Public')}
            className={classNames(
              'text-[15px] gap-x-[11px] h-[41px] w-[145px] rounded-[10px] flex items-center justify-center bg-[#E8E9F4] text-[#01058A]',
              {
                '!bg-[#4AC1FF] font-bold border-none text-white':
                  visibility === 'Public',
              },
            )}
          >
            <BiLockOpenAlt size={20} />
            Public
          </button>
          <button
            onClick={() => setVisibility('Private')}
            className={classNames(
              'text-[15px] gap-x-[11px] h-[41px] w-[145px] rounded-[10px] flex items-center justify-center bg-[#E8E9F4] text-[#01058A]',
              {
                '!bg-[#4AC1FF] font-bold border-none text-white':
                  visibility === 'Private',
              },
            )}
          >
            <BiLockAlt size={20} />
            Private
          </button>
        </div>
      </div>
      <div className="text-[15px] mt-[16px]">
        <p className="w-[240px] flex gap-x-[10px] mb-0 font-bold items-center">
          Rate Limit{' '}
          <Tooltip
            color="#212121"
            placement="rightTop"
            overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
            title={
              'Limit the number of messages sent from one device on the iframe and chat bubble (this limit will not be applied to you on ChatFly, only on websites for your users to prevent abuse).'
            }
          >
            <AiOutlineQuestionCircle size={18} color="#E77964" />
          </Tooltip>
        </p>
        <p className="mt-[12px] text-[15px] text-[#A7A7B0]">
          Limit to 100 messages every 1 day.
        </p>
        <p className="text-[15px] text-[#A7A7B0]">
          Message to show when limit is reached
        </p>
        <input
          type="text"
          placeholder="Too many messages in a row."
          className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    </div>
  );
};

export default BotConfig;
