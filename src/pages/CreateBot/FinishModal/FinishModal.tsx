'use client';
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next';

interface Props {
  open: boolean;
  onClose: () => void;
}
import IntegrationClient from '@/pages/BuildChatbot/Integration';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function FinishModal({ open, onClose }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered={true}
      width={500}
      closeIcon={false}
      className="rounded-xl"
    >
      <div>
        <p className="bg-[#ECFDF3] w-fit p-2 rounded-full">
          <p className="w-fit p-2 bg-[#D1FADF] mb-0 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011M22 4.00011L12 14.0101L9.00001 11.0101"
                stroke="#039855"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </p>
        <p className="text-[18px] mb-0 text-[#101828] font-semibold">
          {t('createFinish')}
        </p>
        <IntegrationClient />
        <div className="w-full flex justify-center">
          <button
            className={classNames(
              'bg-white py-[10px] font-medium px-4 rounded-lg text-black border-[1px] border-[#D0D5DD]',
            )}
            onClick={() => navigate('/')}
          >
            {t('gotoManager')}
          </button>
        </div>
      </div>
    </Modal>
  );
}
