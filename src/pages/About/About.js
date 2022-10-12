import styles from './About.module.scss';
import classNames from 'classnames/bind';

import Helmet from '~/components/Helmet';

const cx = classNames.bind(styles);

function About() {
    return (
        <Helmet title="About">
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <h1>VỀ CHÚNG TÔI</h1>
                    <div className={cx('text')}>
                        <p>
                            Được thành lập từ 2011 với tư cách là một cửa hàng cung cấp dụng cụ trượt ván tại Hà Nội.
                            “Lenin” là tên gọi một tượng đài tại Hà Nội, nơi khởi nguồn của văn hóa đường phố từ những
                            năm cuối thập niên 90 cho tới tận bây giờ. “n” Chính là số đông, là cộng đồng, chính vì thế
                            cái tên “Leninn” ra đời, chúng tôi không phải cá nhân, chúng tôi được sáng lập bởi cộng
                            đồng!
                        </p>
                        <p>
                            Cảm thấy quá tẻ nhạt sau 9 năm nếu mãi chỉ là một đại lý phân phối nên chúng tôi quyết định
                            phải trở thành một nhà sản xuất độc lập. Luôn kết nối văn hóa đường phố nói chung cũng như
                            Skateboarding nói riêng, tìm kiếm, phát triển những cá nhân có triển vọng trong cộng đồng
                        </p>
                        <p>#LENINNSKATESHOP</p>
                    </div>
                </div>
            </div>
        </Helmet>
    );
}

export default About;
