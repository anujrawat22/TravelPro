let fun = () => {
    return `<div class="room_title">
      <label for="rmm_tit">
        <div class="label">Name</div>
        <input id="rmm_tit" type="text" placeholder="Name of the room..."></input>
      </label>
    </div>
    <div class="room_size">
      <label for="rmm_siz">
        <div class="label">Size</div>
        <input id="rmm_siz" type="text" placeholder="Give the room size..."></input>
      </label>
    </div>

    <div class="room_image">
      <label for="rmm_img">
        <div class="label">Image</div>
        <textarea id="rmm_img" placeholder="Give all the images of particular room..."></textarea>
      </label>
    </div>
    <div class="room_amenities">
      <label for="rmm_amen">
        <div class="label">Amenities</div>
        <textarea id="rmm_amen" placeholder="Amenities of particular room..."></textarea>
      </label>
    </div>
    

    <div class="member">
      <label for="mem">
        <div class="label">People count</div>
        <input id="mem" type="text" placeholder="How many people can stay on single room..."></input>
      </label>
    </div>
    <div class="room_price">
      <label for="rmm_prc">
        <div class="label">Price</div>
        <input id="rmm_prc" type="text" placeholder="Price of particular room..."></input>
      </label>
    </div>
    <div class="room_discount">
      <label for="rmm_disc">
        <div class="label">Discount</div>
        <input id="rmm_disc" type="text" placeholder="Discount in percentage..."></input>
      </label>
    </div>
    <div class="room_total_dis">
      <label for="rm_tt_dis">
        <div class="label">Total Discount</div>
        <input id="rm_tt_dis" type="text" placeholder="Total discount..."></input>
      </label>
    </div>
    
    <div class="room_refund_policy">
      <label for="rm_rf_p">
        <div class="label">Refund</div>
        <textarea id="rm_rf_p" placeholder="Room refund policy..."></textarea>
      </label>
    </div>
    <div class="Reserve">
      <label for="rsve">
        <div class="label">Reserve</div>
        <input id="rsve" type="text" placeholder="Is room reserved true/false..."></input>
      </label>
    </div>
    <div class="room_avail">
      <label for="rom_avl">
        <div class="label">availability</div>
        <input id="rom_avl" type="text" placeholder="Number of room of this category..."></input>
      </label>
    </div>`
}

export default fun