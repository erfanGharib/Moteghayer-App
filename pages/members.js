import Head from 'next/head'
import Layout from '@/Layout/layout'
import MemeberInfo from '@/components/members/memberInfo';
import aliasgharMirshahi from '@/assets/images/members/aliasgharMirshahi.jpg'
import erfanGharib from '@/assets/images/members/erfanGharib.jpg'

const Members = () => {
  return (
    <>
      <Head>
        <title>اعضای متغیر</title>
        <meta name="description" content="اعضای متغیر" />
      </Head>

      <Layout>
        <div className='f-col-center'>
          <h2 className='text-2xl mt-28'>اعضای متغیر</h2>
          <div className='f-start flex-col sm:flex-row w-4/5 sm:h-2/3 mt-5 mb-12 gap-7'>
            <MemeberInfo
              name='عرفان غریب'
              img={{ src: erfanGharib, alt: 'عرفان غریب' }}
            >
              <p>
                - برنامه نویس <br />
                - ۱۳۸۳/۸/۲۹ متولد
              </p>
              <p>
                همیشه به دنبال یادگیری و توسعه مهارت ها و دانش های خود هستم.
                سعی دارم هر روز یه قدم از روز قبل جلوتر باشم
                که همین موضوع سبب پیشرفت من خواهد شد.
              </p>
            </MemeberInfo>

            <MemeberInfo
              name='علی اصغر میرشاهی'
              img={{ src: aliasgharMirshahi, alt: 'علی اصغر میرشاهی' }}
            >
              <p>
                - بازاریاب و سئوکار <br />
                - ۱۳۸۳/۷/۲۹ متولد
              </p>
              <p>
                یادگرفتن بزرگترین هدف زندگی من هستش 
                برای یاد گرفتن دوست دارم تغییر کنم و کارهای متفاوتی انجام بدم
                به همین دلیل در بیشتر سال های عمرم به دنبال تغییر و مفهوم اصلی آن بودم
              </p>
            </MemeberInfo>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Members;