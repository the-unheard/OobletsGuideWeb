<?php foreach($profitMeedItems as $profitMeedItem) {

?>
            <!-- do while loop here -->
            <?php while($row = mysqli_fetch_assoc($profitMeedItem[1])) {

                $type = $row['type'];
                $item = $row['item'];
                $cost = $row['cost'];
                $value = $row['sale'];
                $farming = $row['farming'];
                $processing = $row['processing'];
                $foraging = $row['foraging'];
                $profit = $row['profit'];

                ?>

                    <tr>
                        <td class="profitToggleable"><?= $type ?></td>
                        <td><?= $item ?></td>
                        <td class="profitToggleable text-end"><?= round($cost,0) ?></td>
                        <td class="profitToggleable text-end"><?= round($value,0) ?></td>
                        <td class="text-center"><?php if ($farming == "Y") : ?><i class="fa-solid fa-seedling"></i><?php endif; ?></td>
                        <td class="text-center"><?php if ($processing == "Y") : ?><i class="fa-solid fa-mortar-pestle"></i></i><?php endif; ?></td>
                        <td class="text-center"><?php if ($foraging == "Y") : ?><i class="fa-solid fa-tree"></i><?php endif; ?></td>
                        <td class="text-end profit-totalProfit"><?= round($profit,0) ?></td>
                        <td><div class="profit-profitBar og-bg-profitgreen"></div></td>
                    </tr>

            <?php } ?>

<?php } ?>
