function barcode() {
    return `
    <div id="ak_rewards_img_div">
                <img src="https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg" alt="">
            </div>
            <div id="ak_rewards_child2">
                <div>
                    <h2>Rewards are waiting for you in the Travel Pro app</h2>
                    <ul>
                        <li>Earn 4% back when you book your hotel in app, vs 3% on site</li>
                        <li>Get flight status and gate number notifications</li>
                        <li>Have questions about your stay? Message your hotel right in the app</li>
                    </ul>
                </div>
                <h3>Text yourself a download link</h3>
                <div class="ak_selAndno">
                    <div>
                        <select>
                            <option value="India">India +91</option>
                            <option value="UK">United Kingdom +44</option>
                            <option value="Hngo knog">Hong Kong, SAR +852</option>
                            <option value="Indo">Indonesia +62</option>
                            <option value="Japan">Japan +81</option>
                            <option value="Maldives">Maldives +960</option>
                            <option value="Mexico">Mexico +52</option>
                            <option value="Bhutan">Bhutan +975</option>
                            <option value="Brazil">Brazil +55</option>
                            <option value="Cambodia">Cambodia +855</option>
                            <option value="Canada">Canada +1</option>
                            <option value="China">China +86</option>
                            <option value="Cocos-Islands">Cocos Islands +61</option>
                            <option value="Denmark">Denmark +45</option>
                            <option value="Egypt">Egypt +20</option>
                            <option value="France">France +33</option>
                            <option value="Hong-Kong">Hong Kong SAR +852</option>
                            <option value="India">India +91</option>
                            <option value="Italy">Italy +39</option>
                            <option value="Japan">Japan +81</option>
                            <option value="Liberia">Liberia +231</option>
                        </select>
                    </div>
                    <div>
                        <input type="number" placeholder="Phone number">
                    </div>
                    <div>
                        <button id="ak_rewards_btn">Get the app</button>
                    </div>
                </div>
                <p>By providing your number, you agree to receive a one-time automated text message with a link to get
                    the app. Standard text message rates may apply.</p>
            </div>
            <div id="ak_bar_code_img">
                <img src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_orbitz.png"
                    alt="">
                <h4 id="ak_scan_the_qr">Scan the QR code</h4>
            </div>`
}
export default barcode