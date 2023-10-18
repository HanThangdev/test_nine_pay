import { useTranslation } from 'react-i18next';
import { useMemo, useState } from 'react';
import classNames from 'classnames';
import {
  IconLink,
  IconFiles,
  IconQA,
  IconWeb,
  IconFile,
  IconMess,
  IconImportData,
} from '@/components/IconGroup/IconGroup';
import WebsiteClient from './Website';
import FilesClient from './Files';
import QuestionAnswerClient from './Q&A';

const ImportData = () => {
  const { t } = useTranslation();
  const [importBy, setImportBy] = useState('website');

  return (
    <div className="import-data ">
      <p className="flex text-[20px] items-center text-black">
        <IconImportData />
        Import Data
      </p>
      <div
        className={classNames(
          'border-b-[1px] border-[#E5E7EB] pb-[12px] px-3 flex justify-between ',
        )}
      >
        <div className="flex gap-x-4">
          <div className="bg-[#F3F4F6] py-1 px-2 rounded-lg flex gap-x-1 items-center font-medium">
            <IconLink />
            {0}{' '}
            {0 > 1
              ? `${t('Links', { ns: 'config_bot' })}`
              : `${t('Link', { ns: 'config_bot' })}`}
            <span className="text-[#A7A7B0]">
              (0
              {t('tokens', { ns: 'config_bot' })})
            </span>
          </div>
          <div className="bg-[#F3F4F6] py-1 px-2 rounded-lg flex gap-x-1 items-center font-medium">
            <IconFiles />
            {0}{' '}
            {0 > 1
              ? `${t('Files', { ns: 'config_bot' })}`
              : `${t('File', { ns: 'config_bot' })}`}
            <span className="text-[#A7A7B0]">
              (0 {t('tokens', { ns: 'config_bot' })})
            </span>
          </div>
          <div className="bg-[#F3F4F6] py-1 px-2 rounded-lg flex gap-x-1 items-center font-medium">
            <IconQA />
            {0} Q&A
            <span className="text-[#A7A7B0]">
              (0
              {t('tokens', { ns: 'config_bot' })})
            </span>
          </div>
        </div>
        <div className="text-[#4B5563] font-medium flex items-center">
          {t('TotalToken', { ns: 'config_bot' })}: 0 /10.000.000{' '}
          {t('limit', { ns: 'config_bot' })}
        </div>
      </div>
      <div className="flex gap-x-4 mt-5">
        <div className="w-[224px] bg-[#F3F4F6] p-2 rounded-l-[12px] min-h-[calc(100vh-300px)]">
          <div
            className={classNames('rounded-lg p-3 cursor-pointer mb-3', {
              'bg-[#FCFCFC]': importBy === 'website',
            })}
            onClick={() => setImportBy('website')}
          >
            <p className="text-[#111827] font-medium mb-2 flex gap-x-2 items-center">
              <IconWeb />
              {t('Website', { ns: 'config_bot' })}
            </p>
            <div className="bg-[#F3F4F6] text-[12px] py-1 px-2 rounded-lg flex gap-x-1 items-center font-medium">
              <IconLink />
              {0}{' '}
              {0 > 1
                ? `${t('Links', { ns: 'config_bot' })}`
                : `${t('Link', { ns: 'config_bot' })}`}
              <span className="text-[#A7A7B0]">
                (0
                {t('tokens', { ns: 'config_bot' })})
              </span>
            </div>
          </div>
          <div
            className={classNames('rounded-lg p-3 cursor-pointer mb-3', {
              'bg-[#FCFCFC]': importBy === 'files',
            })}
            onClick={() => setImportBy('files')}
          >
            <p className="text-[#111827] font-medium mb-2 flex gap-x-2 items-center">
              <IconFile />
              {t('Files', { ns: 'config_bot' })}
            </p>
            <div className="bg-[#F3F4F6] py-1 px-2 rounded-lg flex gap-x-1 items-center font-medium">
              <IconFiles />
              {0}{' '}
              {0 > 1
                ? `${t('Files', { ns: 'config_bot' })}`
                : `${t('File', { ns: 'config_bot' })}`}
              <span className="text-[#A7A7B0]">
                (0
                {t('tokens', { ns: 'config_bot' })})
              </span>
            </div>
          </div>
          <div
            className={classNames('rounded-lg p-3 cursor-pointer', {
              'bg-[#FCFCFC]': importBy === 'Q&A',
            })}
            onClick={() => setImportBy('Q&A')}
          >
            <p className="text-[#111827] font-medium mb-2 flex gap-x-2 items-center">
              <IconMess />
              {t('Q&A', { ns: 'config_bot' })}
            </p>
            <div className="bg-[#F3F4F6] py-1 px-2 rounded-lg flex gap-x-1 items-center font-medium">
              <IconQA />
              {0} Q&A
              <span className="text-[#A7A7B0]">
                (0
                {t('tokens', { ns: 'config_bot' })})
              </span>
            </div>
          </div>
        </div>
        <div className="w-[calc(100%-224px)]">
          {importBy === 'website' && <WebsiteClient />}
          {importBy === 'files' && <FilesClient />}
          {importBy === 'Q&A' && <QuestionAnswerClient />}
        </div>
      </div>
    </div>
  );
};

export default ImportData;
